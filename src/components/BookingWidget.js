import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const handleBedAndBreakfastSubmit = (formData) => {
  const baseUrl =
    'https://www.bed-and-breakfast.it/it/lombardia/foresteria-antica-farmacia-cedegolo/66833'
  const params = new URLSearchParams()

  params.append('checkin', formatDate(formData.checkin))
  params.append('checkout', formatDate(formData.checkout))
  params.append('NumberRooms', formData.numberRooms.toString())
  params.append('NumberPeople', formData.numberPeople.toString())

  const finalUrl = `${baseUrl}?${params.toString()}`

  window.location.href = finalUrl
}
const handleIBookingSubmit = (formData) => {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action =
    'https://booking.ireservation.it/it/lombardia/foresteria-antica-farmacia-cedegolo/66833'
  form.target = '_self'

  const appendInput = (name, value) => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  }

  appendInput('checkin', formatDate(formData.checkin))
  appendInput('checkout', formatDate(formData.checkout))
  appendInput('NumberRooms', formData.numberRooms.toString())
  appendInput('NumberPeople', formData.numberPeople.toString())

  document.body.appendChild(form)
  form.submit()
}

const BookingWidget = ({ provider = 'ibooking' }) => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    numberPeople: 1,
    numberRooms: 1,
  })

  const [touched, setTouched] = useState({})

  const [errors, setErrors] = useState({})

  const validateForm = useCallback(() => {
    const newErrors = {}
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (!formData.checkin) {
      newErrors.checkin = t('Date is required')
    }

    if (!formData.checkout) {
      newErrors.checkout = t('Date is required')
    }

    if (formData.numberPeople < 1 || formData.numberPeople > 20) {
      newErrors.numberPeople = t('Guests must be between 1 and 20')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, t])

  const handleSubmit = () => {
    setTouched({
      checkin: true,
      checkout: true,
      numberPeople: true,
    })

    if (validateForm()) {
      if (provider === 'bed-and-breakfast') {
        handleBedAndBreakfastSubmit(formData)
      } else if (provider === 'ibooking') {
        handleIBookingSubmit(formData)
      } else {
        setErrors({
          provider: t(
            'Could not contact reservation website, please try again later.'
          ),
        })
      }
    }
  }

  useEffect(() => {
    validateForm()
  }, [formData.checkin, formData.checkout, formData.numberRooms, validateForm])

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 className="mb-4">{t('Book your stay')}</h3>
      </div>
      <div className="col-md-3 mb-10">
        <label htmlFor="checkIn" style={{ width: '100%' }}>
          <i className="fa fa-calendar" /> {t('Check-in')}
          <input
            id="checkIn"
            type="date"
            style={{ backgroundColor: 'white' }}
            min={new Date().toISOString().split('T')[0]} // Prevent past dates
            max={formData.checkout || ''}
            value={formData.checkin}
            onChange={(e) =>
              setFormData({ ...formData, checkin: e.target.value })
            }
          />
        </label>
        {errors.checkin && touched?.checkin && (
          <div className="text-danger">{errors.checkin}</div>
        )}
      </div>
      <div className="col-md-3 mb-10">
        <label htmlFor="checkOut" style={{ width: '100%' }}>
          <i className="fa fa-calendar" /> {t('Check-out')}
          <input
            id="checkOut"
            type="date"
            style={{ backgroundColor: 'white' }}
            min={
              formData.checkin
                ? formData.checkin
                : new Date().toISOString().split('T')[0]
            } // Prevent past dates and ensure check-out is after check-in
            value={formData.checkout}
            onChange={(e) =>
              setFormData({ ...formData, checkout: e.target.value })
            }
          />
        </label>
        {errors.checkout && touched?.checkout && (
          <div className="text-danger">{errors.checkout}</div>
        )}
      </div>
      <div className="col-md-3 mb-10">
        <label htmlFor="numberPeople" style={{ width: '100%' }}>
          <i className="fa fa-users" /> {t('Guests')}
          <input
            id="numberPeople"
            type="number"
            min="1"
            max="20"
            style={{ backgroundColor: 'white' }}
            value={formData.numberPeople}
            onChange={(e) =>
              setFormData({ ...formData, numberPeople: e.target.value })
            }
          />
        </label>
        {errors.numberPeople && touched?.numberPeople && (
          <div className="text-danger">{errors.numberPeople}</div>
        )}
      </div>
      <div className="col-md-3 mb-10">
        <label htmlFor="search" style={{ width: '100%' }}>
          <i className="fa fa-search" /> {t('Check availability')}
          <button
            type="button"
            onClick={handleSubmit}
            className="main-btn btn-filled"
            style={{ width: '100%', height: '70px' }}
            id="search"
          >
            {t('Search')}
          </button>
        </label>
      </div>
      {errors.provider && (
        <div className="col-md-12">
          <p>
            <div className="text-danger">{errors.provider}</div>
          </p>
        </div>
      )}
    </div>
  )
}

export default BookingWidget

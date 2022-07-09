import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonLink = ({ to, label, muted, className }) => (
  <Link className={className} to={to}>
    {label}
    {muted && (
      <>
        <br />
        <span className="muted">{muted}</span>
      </>
    )}
  </Link>
)

const FilledBtnLink = styled(ButtonLink).attrs(() => ({
  className: 'main-btn btn-filled',
}))``

const BorderBtnLink = styled(ButtonLink).attrs(() => ({
  className: 'main-btn btn-border',
}))``

export { BorderBtnLink, ButtonLink, FilledBtnLink }

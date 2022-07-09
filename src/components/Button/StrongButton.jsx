import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin-top: 40px;
  padding: 12px 36px;
  background-color: #111;
  color: #fff;
  display: inline-flex;
  align-items: center; /* vertical alignment of items */

  font-weight: 700;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  border-radius: 0px;
  cursor: pointer;
  transition: all 0.4s ease-out 0s;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #111;

  &:hover {
    background-color: #bead8e;
    border-color: #bead8e;
  }
`
const InnerDiv = styled.div`
  text-align: left;
  padding-left: 12px;
`

const StrongButton = ({ label, muted, icon }) => (
  <StyledButton>
    <i className={classNames(icon, 'fa-3x')} />
    <InnerDiv>
      {label}
      {muted && (
        <>
          <br /> {muted}
        </>
      )}
    </InnerDiv>
  </StyledButton>
)

export default StrongButton

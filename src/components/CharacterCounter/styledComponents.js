import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`
export const BannerPart = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  border-radius: 0 0 0 8px;
`

export const BannerRightPart = styled.div`
  display: flex;
  border-radius: 8px 0 0 8px;
  flex-direction: column;
  width: 40vw;
  background-color: #ffc533;
`

export const BannerDesc = styled.h1`
  color: #1e293b;
  font-size: 28px;
  font-family: 'Roboto';
`
export const BannerTopPart = styled.div`
  background-color: #ffbf1f;
  height: 120px;
  padding: 20px;

  border-radius: 8px 0 0 8px;
`

export const InputsContainer = styled.ul`
  background-color: #ffc533;
  height: 60vh;
  padding: 30px;
  list-style-type: none;
`

export const BannerLeftPart = styled.form`
  background-color: #0f172a;
  width: 40vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: 0 8px 8px 0;
`

export const BannerHeading = styled.h1`
  color: #ffc533;
  font-size: 28px;
  margin-bottom: 40px;
  font-family: 'Roboto';
`

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Input = styled.input`
  height: 40px;
  width: 250px;
  margin-right: 13px;
  outline: none;
  border-radius: 4px;
  border-style: none;
  padding: 8px;
  font-family: 'Roboto';
`

export const AddInputButton = styled.button`
  width: 70px;
  background-color: #ffc533;
  border-style: none;
  border-radius: 4px;
  color: #272c47;
  font-weight: 700;
  cursor: pointer;
`

export const NoEntriesImage = styled.img`
  height: 200px;
  width: 300px;
  justify-self: center;
  align-self: center;
`
export const InputDetails = styled.li`
  color: #272c47;
  font-size: 15px;
  font-weight: 700;
`

export const InputNameAndLength = styled.p`
  color: #272c47;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
`

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  display: block;
  margin-right: 18px;
`;

export const Label = styled.label`
  color: #8A8A89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.286;
  margin-bottom: 8px; 
`;

export const Select = styled.select` 
  display: block;
  padding: 14px 56px 14px 18px;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11;
  border-radius: 14px;
  background: #F7F7FB;
  color: #121417;
  margin-top: 8px;
  border: none;
  &::placeholder {color: #000};

  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  
  &::-ms-expand {
    display: none;
  }
`;

export const Option = styled.option`
  color: rgba(18, 20, 23, 0.20);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;  
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  background: #F7F7FB;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  
  &::placeholder {color: #000};
`;

export const LabelTo = styled.label`
  color: rgba(18, 20, 23, 0); 
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.286;
  margin-bottom: 8px; 
`;

export const InputTo = styled.input`
  height: 48px;
  padding: 14px 24px;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25; 
  width: 160px;
  border-radius: 0px 14px 14px 0px;
  background: #F7F7FB;
  border: none;

  &::placeholder {color: #000};
`;

export const Button = styled.button`
  height: 48px;
  margin-left: 18px;
  color: var(--text-color-white);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  
  width: 136px;
  border-radius: 14px;
  background: var(--bg-button-color);
  border: none;
`;

export const ImgBrand = styled.img`
  display: inline;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: 186px;
  margin-top: -34px;

  &:active {
    // transform:rotate(180deg);
  }

  &:focus {
    transform:rotate(180deg);
  }

  &:hover {
    transform:rotate(180deg);
  }
`;

export const ImgPrice = styled.img`
  display: inline;
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: 87px;
  margin-top: -34px;

  &:active {
    // transform:rotate(180deg);
  }

  &:focus {
    transform:rotate(180deg);
  }

  &:hover {
    transform:rotate(180deg);
  }
`;
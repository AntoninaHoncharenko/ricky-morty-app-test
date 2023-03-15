import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1050px;
  padding: 21px 15px 142px;
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const BackText = styled.p`
  margin-left: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

export const Wrap = styled.div`
  width: 413px;
  margin: 0 auto;
  margin-top: 31px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
  margin-bottom: 16px;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: 48px;
  line-height: 56px;
  color: #081f32;
  text-align: center;
  margin-bottom: 48px;
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  text-align: center;
  margin-bottom: 48px;
`;

export const InfoList = styled.ul`
  margin: 0 auto;
  width: 398px;
`;

export const InfoItem = styled.li`
  width: 398px;
  height: 64px;
  padding: 9px 0;
  border-bottom: 1px solid #6e798c;
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const InfoText = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
`;

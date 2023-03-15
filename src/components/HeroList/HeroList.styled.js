import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 24px 20px;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  width: 240px;
  height: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
  flex-grow: 1;
`;

export const Image = styled.img`
  width: 240px;
  height: 168px;
  object-fit: cover;
`;

export const Wrap = styled.div`
  padding: 12px 16px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 1px;
`;

export const Text = styled.p`
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

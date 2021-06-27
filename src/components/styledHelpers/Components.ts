import styled from 'styled-components';
import {Colors} from "./Colors";
// import {Colors} from "./Colors";
// import { rgba } from 'polished';
//
// export const boxShadow = (): Styles => {
//     return {
//         boxShadow: `0px 3px 3px ${rgba(Colors.darkBlue, .05)},
//         0px 2px 2px ${rgba(Colors.darkBlue, .07)},
//         0px 1px 1px ${rgba(Colors.darkBlue, .1)}`
//     };
// };

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const HrLine = styled.div`
  width: 100%;
  background-color: ${Colors.grey2};
  height: 1px;
  margin-top: 20px;
`;

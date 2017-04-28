/* A Caption (Box) */

import styled from 'styled-components';
import bsTheme from 'theme';
const defaultProps = { theme: bsTheme };

const Caption = styled.caption`
  ${(props) => `
    padding-top: ${props.theme['$table-cell-padding']};
    padding-bottom: ${props.theme['$table-cell-padding']};
    color: ${props.theme['$text-muted']};
    text-align: left;
    caption-side: top;
  `}
`;

Caption.defaultProps = defaultProps;

export default Caption;

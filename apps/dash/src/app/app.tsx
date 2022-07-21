import styled from '@emotion/styled';
import { Form, FormType, PageType } from '@samelogic/microsurveys-types';
import { MicrosurveyEditor } from '@samelogic/react-microsurveys-editor';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const form: Form = {
    type: FormType.Form,
    title: 'Form',
    pages: [
      {
        type: PageType.ThankYou,
      },
    ],
  };
  return (
    <StyledApp>
      <MicrosurveyEditor form={form} />
    </StyledApp>
  );
}

export default App;

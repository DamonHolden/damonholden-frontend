import codePicture from '../images/code.png';
import { Card } from './Card';

export const CodeSnippetPicture = () => {
  return (
    <Card>
      <h2 className='code-title'>JavaScript logic</h2>
      <img className='code-image' alt='deployment diagram' src={codePicture} />
    </Card>
  );
};

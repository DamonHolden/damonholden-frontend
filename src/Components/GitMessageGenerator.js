import { Card } from './Card';
import { animated, useSpring } from 'react-spring';
import { useRef, useState } from 'react';

export const GitMessageCreator = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const message = useRef();

  const [type, setType] = useState();
  const [firstLineLength, setFirstLineLength] = useState(50);
  const [description, setDescription] = useState('');

  return (
    <animated.div className='page' style={springProps}>
      <h1>git message creator</h1>
      {type && (
        <Card>
          <div>
            <h2 ref={message}>
              {type} {description}
            </h2>
            <button
              className='button-primary'
              onClick={() => {
                navigator.clipboard.writeText(message.current.innerHTML);
              }}
            >
              copy to clipboard
            </button>
          </div>
        </Card>
      )}
      <Card>
        <h2>Select a type:</h2>
        <div
          onChange={(e) => {
            setType(e.target.value);
            setFirstLineLength(50 - e.target.value.length);
          }}
        >
          <input type='radio' value='fix:' name='type' />
          patches a bug in your codebase
          <br />
          <input type='radio' value='feat:' name='type' />
          introduces a new feature to the codebase
          <br />
          <input type='radio' value='build:' name='type' />
          changes that affect the build system or external dependencies
          <br />
          <input type='radio' value='docs:' name='type' />
          documentation only changes
          <br />
          <input type='radio' value='perf:' name='type' />a code change that
          improves performance
          <br />
          <input type='radio' value='refactor:' name='type' />a code change that
          neither fixes a bug nor adds a feature
          <br />
          <input type='radio' value='style:' name='type' />
          changes that do not affect the meaning of the code
          <br />
          <input type='radio' value='test:' name='type' />
          adding missing tests or correcting existing tests
          <br />
        </div>
      </Card>
      {type ? (
        <Card>
          <h2>Add a description:</h2>
          <input
            type='text'
            maxLength={50 - type.length}
            onKeyDown={(e) => {
              console.log(e.target.value);
              if ([' '].includes(e.key) && e.target.value === '')
                e.preventDefault();
            }}
            onChange={(e) => {
              setFirstLineLength(50 - type.length - e.target.value.length);
              setDescription(e.target.value.toLowerCase());
            }}
          />
          {'characters remaining ' + firstLineLength}
        </Card>
      ) : null}
      <Card>
        <h2>Based on following specification:</h2>
        <pre>{`Structure:
	<type>(<scope(Optional)>): <description>
	<BLANK LINE>
	<body(optional)>
	<BLANK LINE>
	<footer(optional)>

types:
	fix: patches a bug in your codebase
	feat: introduces a new feature to the codebase
	build: Changes that affect the build system or external dependencies
	docs: Documentation only changes
	perf: A code change that improves performance
	refactor: A code change that neither fixes a bug nor adds a feature
	style: Changes that do not affect the meaning of the code
	test: Adding missing tests or correcting existing tests

scope:
	animations
	common
	compiler
	compiler-cli
	core	
	elements
	forms
	http
	language-service
	platform-browser
	platform-browser-dynamic
	platform-server
	platform-webworker
	platform-webworker-dynamic
	router
	service-worker
	upgrade

Description:
	use the imperative, present tense: "change" not "changed" nor "changes"
	don't capitalize the first letter
	no dot (.) at the end

Body: 
	Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.
	free form
	

Footer:
	The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

	Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

	A detailed explanation can be found in this document.`}</pre>
      </Card>
    </animated.div>
  );
};

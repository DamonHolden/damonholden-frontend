import { useRef, useState } from 'react';
import { Card } from './Card';
import { animated, useSpring } from 'react-spring';

export const PetInsuranceInfo = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const typeOfAnimal = useRef();
  const name = useRef();
  const gender = useRef();
  const dateOfBirth = useRef();
  const type = useRef();
  const initialCost = useRef();
  const neuteredOrSpayed = useRef();
  const microchipped = useRef();
  const vaccines = useRef();
  const injuriesOrIllnesses = useRef();
  const aggression = useRef();
  const complaints = useRef();
  const usage = useRef();
  const alcohol = useRef();
  const [petName, setPetName] = useState();
  return (
    <animated.div className='page' style={springProps}>
      <Card>
        <form>
          <label>
            Type of animal:
            <br />
            <select ref={typeOfAnimal}>
              <option value='Dog'>Dog</option>
              <option value='Cat'>Cat</option>
            </select>
            <br />
          </label>
          <label>
            Pet's name:
            <br />
            <input
              ref={name}
              type='text'
              onChange={() => {
                setPetName(name.current.value);
              }}
            />
            <br />
          </label>
          <label>
            {petName ? petName : 'Pet'}'s gender:
            <br />
            <select ref={gender}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
            <br />
          </label>
          <label>
            {petName ? petName : 'Pet'}'s date of birth:
            <br />
            <input ref={dateOfBirth} type='date' />
            <br />
          </label>
          <label>
            {petName ? petName : 'Pet'}'s type:
            <br />
            <select ref={type}>
              <option value='Pedigree'>Pedigree</option>
              <option value='Crossbreed'>Crossbreed</option>
              <option value='Mongrel'>Mongrel</option>
            </select>
            <br />
          </label>
          <label>
            {petName ? petName : 'Pet'}'s size:
            <br />
            <select ref={type}>
              <option value='Small (up to 10kg)'>Small (up to 10kg)</option>
              <option value='Medium (10-20kg)'>Medium (10-20kg)</option>
              <option value='Large (more than 20kg)'>
                Large (more than 20kg)
              </option>
            </select>
            <br />
          </label>
          <label>
            {petName ? petName : 'Pet'}'s initial cost:
            <br />
            £<input ref={initialCost} type='number' />
            <br />
          </label>
          <label>
            Neutered or spayed?:
            <br />
            <select ref={neuteredOrSpayed}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            Microchipped:
            <br />
            <select ref={microchipped}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            Vaccines up to date?
            <br />
            <select ref={vaccines}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            pre-existing injuries or illnesses?
            <br />
            <select ref={injuriesOrIllnesses}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            aggressive tendencies?
            <br />
            <select ref={aggression}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            complaints or legal action in last 5 years?
            <br />
            <select ref={complaints}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            used for breeding, racing, guarding, hunting, or has had a
            connection with a trade or business?
            <br />
            <select ref={usage}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
          <label>
            Does your pet live on premises where alcohol is sold?
            <br />
            <select ref={alcohol}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
            <br />
          </label>
        </form>
        <button
          className='button-primary'
          onClick={() => {
            // https://youtu.be/io2blfAlO6E
            const time = new Date();
            console.log(name);
            const data = `data,value
type,${typeOfAnimal.current.value}
name,${name.current.value}
gender,${gender.current.value}
DOB,${dateOfBirth.current.value}
type,${type.current.value}
cost,£${initialCost.current.value}
neutered or spayed,${neuteredOrSpayed.current.value}
chipped,${microchipped.current.value}
vaccines up to date,${vaccines.current.value}
existing injuries or illnesses,${injuriesOrIllnesses.current.value}
aggressive tendencies,${aggression.current.value}
complaints or legal action in last 5 years,${complaints.current.value}
used for breeding racing guarding hunting or has had a connection with a trade or business?,${
              usage.current.value
            }
live on premises where alcohol is sold,${alcohol.current.value}
info valid from, ${time.toLocaleString()}
`;
            const blob = new Blob([data], { type: 'octet-stream' });
            const href = URL.createObjectURL(blob);

            const a = Object.assign(document.createElement('a'), {
              href,
              style: 'display:none',
              download: petName + "'s insurance details.csv",
            });

            a.click();
            URL.revokeObjectURL(href);
            a.remove();
          }}
        >
          download
        </button>
      </Card>
    </animated.div>
  );
};

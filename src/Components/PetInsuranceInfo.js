import { Card } from './Card';

export const PetInsuranceInfo = () => {
  return (
    <Card>
      <div>
        <label>
          Type of animal.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Name.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Gender.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Date of birth.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Initial cost.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Neutered or spayed.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Microchipped.
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Vaccines up to date?
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          pre-existing injuries or illnesses?
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          aggressive tendencies?
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          complaints or legal action in last 5 years?
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          used for breeding, racing, guarding, hunting, or has had a connection
          with a trade or business?
          <br />
          <input type='text' />
          <br />
        </label>
        <label>
          Does your pet live on premises where alcohol is sold?
          <br />
          <input type='text' />
          <br />
        </label>
      </div>
    </Card>
  );
};

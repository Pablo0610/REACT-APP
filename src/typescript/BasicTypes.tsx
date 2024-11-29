

export default function BasicTypes() {

let name: string  = ' Pablo Noe';
const age: number = 24;
const isActive: boolean = false;

const people = ['Camila', 'Andrea', 'Jose']

  return (
    <>

    <h3> Tipos Basicos</h3>
        {name} - {age} - {isActive ? 'Activo' : 'No Activo'} - {people.join(', ')}

        </>
  )
}

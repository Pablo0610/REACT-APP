interface Person{
    age?: number,
    firstName: string,
    lastName: string,
    address: {
        country:string,
        houseNo:number
    }
}


export default function ObjecLiterals() {

    const person: Person ={
        //age:24,
        firstName : 'Pablo',
        lastName :' Farinango',
        address: {
            country: 'Ecuador',
            houseNo: 12345
        }
    }
  return (
    <>
    <h3>Objetos</h3>
        {JSON.stringify(person, null, 2)}
    </>
  )
}

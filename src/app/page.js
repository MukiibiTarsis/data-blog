export default function Home() {

let first_number = 923;
let second_number = 7;
let sum = first_number + second_number;

return (
    <div style = {{color : 'red', backgroundColor: '#f9f9f9', border: '5px solid px', padding:'30px', 
      margin: '50px', borderRadius:'5px' 
    }}> 
      <h1> DATA SCIENCE FOR AFRICA</h1>
      <h2> An initiative for 2025</h2>
      <p> Welcome to our website</p>
      
      <strong>{10 + 10 *1000}</strong>
      <br/>
      <em>{sum}</em>

    </div>
);
}
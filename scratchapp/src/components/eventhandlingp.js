


/*This is click event with props*/
function PropalertButton({message, children}){
    return(
        <button onClick={() => alert(message)}>
            {children}
        </button> 
    )
}

/* This is normal click alert event*/
export default function ButtonEvent(){
    return(
        <div style={{margin:100,background:'blue',borderBlock:10}}>
            <p>Button event handling</p>
         <button onClick={() => alert('you clicked the button')}>clickme</button><br></br>
         <br></br>
         <br></br>
        <PropalertButton message = 'Loading...'>Load The Image</PropalertButton>
        <PropalertButton message = 'Uploading...'>uploaad The Image</PropalertButton>
    </div>
    );
}

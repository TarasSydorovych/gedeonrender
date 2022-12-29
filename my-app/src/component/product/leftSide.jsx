
import * as React from 'react';

export default function LeftSide() {
const desc = [{
    title: 'Exterior renderings of the Hof-Niederstein residential complex',
    description: 'Blazing a trail on the Swiss architecture scene is young, innovative architecture firm realart architects. Based in Buonas/Zug, this hip company is now focusing its sophisticated architectural vision on residential buildings. A prime example is the Hof-Niederstein housing estate comprising six single-family houses. These aren’t simple buildings but artistic creations that incorporate sustainability while achieving unity with the picturesque surrounds. From some angles, it is difficult to tell where a home ends and nature begins. We captured this beautiful fusion of Man and Earth in our premium 3d renderings. From bright, warm mornings on sun-drenched fields and terraces to relaxed evenings bathed in soft light, this is an insight into luxuryliving.',
    client: 'REALART ARCHITECTS',
    data: '22.07.2022',
}]

  return (
    <>
<div style={{
    
    marginLeft: '20px',
    width: '40%',
    display: 'flex',
    justifyContent:'center',
flexDirection: 'column',
position: 'sticky',
  top: '0',
  alignSelf: 'flex-start',
}}>
<h1 style={{
   fontWeight: 'bolder',
   fontFamily: ['Quicksand', 'sans-serif'].join(','), 
   fontSize: '25px',
    width: '80%',
    color: '#1f1f1f',
   
}}>{desc[0].title}</h1>
<p style={{
   fontSize: '15px',
    width: '80%',
    marginTop: '30px',
    }}>{desc[0].description}</p>
    <p style={{
   fontSize: '17px',
   fontWeight: 'bolder',
    width: '80%',
    marginTop: '30px',
    color: '#1f1f1f',
    }}>Client:</p>
    <p style={{
   fontSize: '15px',
    width: '80%',
    marginTop: '30px',
    }}>{desc[0].client}</p>
<p style={{
   fontSize: '15px',
   fontSize: '17px',
   fontWeight: 'bolder',
    width: '80%',
    marginTop: '30px',
    color: '#1f1f1f',
    }}>DATE:</p>
    <p style={{
   fontSize: '15px',
    width: '80%',
    marginTop: '30px',
    }}>{desc[0].data}</p>
</div>
    </>
  );
}

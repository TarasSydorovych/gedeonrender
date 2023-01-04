import * as React from 'react';
import PictureList from './pictureList'
import TextContent from './textContent';
import ContactInfo from './contactInfo';
export default function Body({listProduct}) {

  return (
    <>
    <PictureList listProduct={listProduct}/>
    <TextContent/>
    <ContactInfo/>
    </>
  );
}

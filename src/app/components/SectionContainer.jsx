import React from 'react';
import Header from './Header.jsx';
import Observed from 'react-observed';

// const SectionContainer = ({ title, navList, children }) => (
//   <div className="section-container">
//     <Header title={title} navList={navList}/>     
//     <div className="section-content">{children}</div>
//   </div>
// );

// export default SectionContainer;

// export default class SectionContainer extends React.Component{
//   render() {
//     return (
//       <Observed
//       intersectionsRatio={.75}>
//         {({ isInView, mapRef }) => (
//           <div ref={mapRef} className="section-container">
//             {isInView ? <Header title={this.props.title} navList={this.props.navList}/> : <div></div>}     
//             <div className="section-content">{children}</div>
//           </div>
//         )}
//       </Observed>
//     );

//   }
// }
const SectionContainer = ({ title, navList, children }) => console.log("rendering section") || (
  <div>
  <Observed intersectionRatio={.1}>
    {({ isInView, mapRef }) => (
      <div ref={mapRef} className="section-container">
        {isInView ? <Header title={title} navList={navList}/> : console.log(isInView) || <div>{isInView}</div>}     
        <div className="section-content">{children}</div>
      </div>
    )}
  </Observed>
  </div>
);


export default SectionContainer;
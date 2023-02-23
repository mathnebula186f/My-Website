import React, { useState } from "react";
import Header from "./Header";
import FooterNote from "./FooterNote";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./Testimonial.css"
function Testimonials() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <section id="testimonials">
      <div className="Main-Container">
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        {/* <FooterNote /> */}
      </div>
    </section>
  );
}

export default Testimonials;



































// import React from "react";

// function Testimonials(){
//     return (
//       <section id="testimonials">
//         <div id="testimonial-carousel" class="carousel slide">
//           <div class="carousel-inner">



//             <div class="carousel-item active">
//               <h2 class="testimonial-text">
//                 I no longer have to roam other stores for love. I've found the
//                 delicious Chocolava on flavourly. Woof.
//               </h2>
//               <img
//                 class="testimonial-image"
//                 src="images/dog-img.jpg"
//                 alt="dog-profile"
//               />
//               <em>Pebbles, New York</em>
//             </div>




//             <div class="carousel-item">
//               <h2 class="testimonial-text">
//                 I used to be so lonely, but with flavourly's help, I've
//                 found the love of their life. I think.
//               </h2>
//               <img
//                 class="testimonial-image"
//                 src="images/lady-img.jpg"
//                 alt="lady-profile"
//               />
//               <em>Beverly, Illinois</em>
//             </div>


//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#testimonial-carousel"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#testimonial-carousel"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </section>
//     );
// }

// export default Testimonials;
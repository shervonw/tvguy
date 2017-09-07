import React from 'react';
import { resolveImagePath } from '../../../core/utilities';
import {
  Row, Col
} from 'react-materialize';
import './style.css';


const Cast = ({ cast }) => {
  return (
    <Row>
      <Col s={12}>
        <h4 className="tv-show-title">Actors</h4>
        <div className="divider"></div>
        <div className="poster-container">
          
          { 
            cast.map((actor, key) => {
              const { image: characterImageUrl } = actor.character;
              const { image: personImageUrl } =  actor.person;

              const characterImage = (characterImageUrl) ? characterImageUrl.medium : null;
              const personImage = (personImageUrl) ? personImageUrl.medium : null;

              const imageUrl = characterImage || personImage;
              
              return (
                <div key={ key } className="poster-block">
                  <div className="poster-image-container">
                    <img className="responsive-img" src={ resolveImagePath(imageUrl) } alt={ actor.character.name } />
                    <div className="cloak-overlay">
                      <img className="responsive-img" src={ personImage } alt={ actor.person.name } />
                    </div>
                  </div>
                  <div className="cast-text-container">
                    <p className="cast-text cast-name truncate">{ actor.person.name }</p>
                    <p className="cast-text cast-character truncate">{ actor.character.name }</p>
                  </div> 
                </div>
              );
            })
          }

        </div>
      </Col>
    </Row>  
  );
}

export default Cast;
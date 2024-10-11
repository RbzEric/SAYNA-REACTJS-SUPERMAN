import '../Styles/Filter.css';
import React from 'react';

function Filter() {
    return (
        <div className='filter'>
            <h3 className='filter-title'>Filtres</h3>
            <div className="slider-container">
                <h2 className='price-title'>Prix</h2>
                <input type="range" min="0" max="200" className="slider" id="priceRange" />
                <div className="price-labels">
                    <span>0€</span>
                    <span>100</span>
                    <span>200€</span>
                </div>
            </div>
            <div className='category'>
                <div className='V'></div> 
                <p className='cat'>Catégories</p>
                <ul class="category-list">
                    <li><input type="checkbox" id="bestsellers" /><label for="bestsellers">Bestsellers</label><span>(123)</span></li>
                    <li><input type="checkbox" id="goodies" /><label for="goodies">Goodies</label><span>(123)</span></li>
                    <li><input type="checkbox" id="vetements" /><label for="vetements">Vêtements</label><span>(123)</span></li>
                    <li><input type="checkbox" id="affiches" /><label for="affiches">Affiches/posters</label><span>(123)</span></li>
                    <li><input type="checkbox" id="comics" /><label for="comics">Comics</label><span>(123)</span></li>
                    <li><input type="checkbox" id="multimedia" /><label for="multimedia">Multimédia</label><span>(123)</span></li>
                    <li><input type="checkbox" id="equipement" /><label for="equipement">Équipement</label><span>(123)</span></li>
                    <li><input type="checkbox" id="bijoux" /><label for="bijoux">Bijoux</label><span>(123)</span></li>
                    <li><input type="checkbox" id="vehicules" /><label for="vehicules">Véhicules</label><span>(123)</span></li>
                </ul>

            </div>
            <div className='color'>
                <div className='V'></div>
                <p className='cat'>Couleur</p>
            </div> <br /> <br /> <br />
            <div className='Univers'>
                <div className='V-inverse'></div>
                <p className='univ' style={{fontFamily:'rajdhani' , fontWeight:'600'}}>Univers</p>
                
                <ul class="category-list">
                    
                    <li><input type="checkbox" id="The_Batman " /><label for="The_Batman ">The Batman </label><span>(123)</span></li>
                    <li><input type="checkbox" id="The-Dark-Night-Rises" /><label for="The_Dark_Night_Rises">The Dark Night Rises</label><span>(123)</span></li>
                    <li><input type="checkbox" id="Batman-V-Superman" /><label for="Batman_V_Superman">Batman V Superman</label><span>(123)</span></li>
                    <li><input type="checkbox" id="Batman-et-Robin " /><label for="Batman_et_Robin ">Batman et Robin </label><span>(123)</span></li>
                    <li><input type="checkbox" id="Autres" /><label for="Autres">Autres (comics, dessin animés) </label><span>(123)</span></li>
                </ul>
            </div>

        </div>
    )
}

export default Filter
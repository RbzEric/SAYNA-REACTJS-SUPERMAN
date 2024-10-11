import '../Styles/Addproduit.css';
import React, { useState } from "react";
import { db, storage } from "../Components/Config"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProductForm = () => {
    const [productName, setProductName] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    // Fonction pour gérer le changement de fichier
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // Fonction pour ajouter un produit
    const addProduct = async (e) => {
        e.preventDefault();
        setIsUploading(true);

        try {
            const storageRef = ref(storage, `images/${imageFile.name}`);
            await uploadBytes(storageRef, imageFile);
            console.log("Image téléchargée avec succès");

            const imageUrl = await getDownloadURL(storageRef);

            await addDoc(collection(db, "Produits"), {
                ProductName: productName,
                oldPrice: Number(oldPrice),
                newPrice: Number(newPrice),
                ProductImage: imageUrl,
            });

            console.log("Produit ajouté avec succès dans Firestore");
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
        }

        setIsUploading(false);
    };

    return (
        <form onSubmit={addProduct} className='product-add'>
            <div className='item-add'>
                <label>Nom du produit :</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div className='item-add'>
                <label>Prix ancien :</label>
                <input
                    type="number"
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    required
                />
            </div>
            <div className='item-add'>
                <label>Nouveau prix :</label>
                <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Image du produit :</label>
                <input type="file" onChange={handleFileChange} required />
            </div>
            <button type="submit" disabled={isUploading}>
                {isUploading ? "Téléchargement en cours..." : "Ajouter le produit"}
            </button>
        </form>
    );
};

export default AddProductForm;

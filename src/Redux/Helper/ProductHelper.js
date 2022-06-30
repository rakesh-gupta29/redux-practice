//Firebase
import { firestore } from './../../utils';
//Toastify
import { toast } from 'react-toastify'
export const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc()
            .set(product)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleFetchProducts = () => {

    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .orderBy('createdDate')
            .get()
            .then((snapshot) => {
                const productsArray = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(productsArray);
            })
            .catch((error) => {
                reject(error)
                toast.error(error)
            })
    })


    // { filterType, startAfterDoc, persistProducts = [] }
    // return new Promise((resolve, reject) => {
    //   const pageSize = 6;

    //   let ref = firestore.collection('products').orderBy('createdDate').limit(pageSize);

    //   if (filterType) ref = ref.where('productCategory', '==', filterType);
    //   if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    //   ref
    //     .get()
    //     .then(snapshot => {
    //       const totalCount = snapshot.size;

    //       const data = [
    //         ...persistProducts,
    //         ...snapshot.docs.map(doc => {
    //           return {
    //             ...doc.data(),
    //             documentID: doc.id
    //           }
    //         })
    //       ];

    //       resolve({
    //         data,
    //         queryDoc: snapshot.docs[totalCount - 1],
    //         isLastPage: totalCount < 1
    //       });
    //     })
    //     .catch(err => {
    //       reject(err);
    //     })
    // })

}

export const handleDeleteProduct = (documentID) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .delete()
            .then((success) => {
                // toast.promise(resolveAfter3Sec, {
                //     pending: 'Please Wait',
                //     success: `Product ${success}`,
                //     error: 'Somthing Went Wrong 🤯'
                // })
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleFetchProduct = (productID) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection('products')
        .doc(productID)
        .get()
        .then(snapshot => {
  
          if (snapshot.exists) {
            resolve({
              ...snapshot.data(),
              documentID: productID
            });
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
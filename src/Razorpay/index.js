import { toast } from "react-toastify";
import { resolveAfter3Sec } from '../Toastify'

export const pay = (props, total) => {

    const { fristName, lastName, address, city, country, postcode, email, phoneNumber, orderNote } = props;

    var options = {
        "key": "rzp_test_7uts3PGRwFZPfZ", // Enter the Key ID generated from the Dashboard
        "amount": total * 100,
        "currency": "INR",
        "name": "Brebel",
        "description": "B.Rebel is an Indian wearables brand that’s bringing forth a new breed of smart electronic gadgets to the Indian marketplace.",
        "image": "",
        handler: (response) => {
            toast.promise(
                resolveAfter3Sec,
                {
                    pending: 'Please Wait',
                    success: response.razorpay_payment_id,
                    error: 'Somthing Went Wrong 🤯'
                }
            )
            toast.success("Payment Successfully")
        },
        prefill: {
            name: fristName,
            email: email,
            contact: phoneNumber
        },
        theme: { color: '#000', },
        "modal": {
            "ondismiss": function () { toast.error('Checkout form closed') }
        },
        notes: orderNote
    }

}


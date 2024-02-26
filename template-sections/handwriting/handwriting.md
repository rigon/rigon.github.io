<style>
.container { text-align: justify; }
h1 {  text-align: left; }
img { border: 1px solid black; }
</style>

# Handwritten signature authentication using motion detection and QRCodes

> [Website Live Demo](https://handwritten-signature-auth.appspot.com/)


## Abstract


<img style="float: right; border: none;" src="/handwriting/logo.png">

Handwritten signature recognition is still the most widely accepted method to validate paper based documents. However, in the digital world, is hard to distinguish a scanned document with real handwritten signature from a forged document. A document can be forged with a copy of the signature made by the same person on another document and simply ``pasted'' into the forged one. Digital documents can be protected with digital signatures and certificates, but they are not always well accepted by general public. A document with a handwritten signature can be more accepted than a document digitally certified. Unfortunately, this imposes restrictions in the use of digital documents, requiring that signed documents continue to be paper-based, making all process more expensive and slower.

With this work we want to present a biometric-based solution that will join the two worlds. On one hand, we want to be able to offer the security of a digital document and on the other hand, we want to give the ``guarantee'' of a document signed by hand. We will propose a system that make use of the touchscreens of smartphones or tablets to collect handwritten signature images and biometric markers. These biometric markers are derived not only from direction of motion that is made directly into the device with a omnidirectional tip stylus or with the finger, but also the dragging or lifting movements the user makes. The obtained data is then compared with previously enrolled biometric markers of the user's handwritten signature. In this work we contend that collecting these simple biometric features allow to make automatic verification of handwritten signatures in digital documents and user authentication in online services. To make the system more interactive and easy to use, we will make use of QRCodes due to its convenience of use.


## Related publications

 - **Time/space based biometric handwritten signature verification**
   Ricardo P. Gonçalves, Alexandre B. Augusto, Manuel E. Correia.
   In 2015 10th Iberian Conference on Information Systems and Technologies (CISTI), 17-20 June 2015
   *Keywords*: signature; handwriting; biometric; verification; authentication
   **URL**: [IEEE Xplore Digital Library](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7170483&isnumber=7170350)


## User manual

### Enrollment

1. Access to the website https://handwritten-signature-auth.appspot.com/
  Then click on **Not yet a user? Click here to register!**

   ![](/handwriting/user-manual-1.png)

2. Select a username. The username you are creating should not exist previously. You also have to confirm you are a person by inputting a captcha.
   Press **Create User**.
  
   ![](/handwriting/user-manual-2.png)

3. Now read the QRCode with your smartphone which contains a URL. Open it with a browser. There is a counter indicating how many signatures left.

   ![](/handwriting/user-manual-3.png)

4. This is the application that will be opened. Here you can sign your signature, you are be asked to sign 5 times.
   You can use your finger or stylus for better accuracy.

   ![](/handwriting/user-manual-14.png)

5. If some of the signatures are too different from the others, the system will ask you to sign them again.
   Press **OK** to sign the remaining signatures.

   ![](/handwriting/user-manual-12.png)

6. When all signatures are similar, you will be presented with a message like this.

   ![](/handwriting/user-manual-13.png)

8. Then, you are asked to create a password. This can be used if you have problems to login with your signature. The password should contain at least 6 characters.
   Click **Next Step** to proceed.

   ![](/handwriting/user-manual-4.png)

9. **Congratulations!** The enrollment process is now complete.
   Press **Login now** to login into your account.

   ![](/handwriting/user-manual-5.png)


### User account

1. Access to the website https://handwritten-signature-auth.appspot.com/
   Insert your username in the text field and press **Submit**.
   Then use your smartphone to read the QRCode. Similarly to the enrollment process, open the URL and sign.
   If your signature is not recognized, you can sign again. When accepted, a message will be displayed on the smartphone.
   
   ![](/handwriting/user-manual-6.png)

2. Account home page.
   From the left menu, the user can access to the functionalities of the system.
   In the center, the user can see some info about himself and a list of signatures all associated with him.

   ![](handwriting/user-manual-7.png)

3. After selecting **Show Signature**, the system shows which is your reference signature.
   There is displayed detailed information about the signature, like position, variation, speed and acceleration.

   ![](/handwriting/user-manual-8.png)

4. In the option **Show Joined Signature** is possible to see signatures used to build the reference signature.
   The signatures will appear overlapped to be easier to compare them. The detailed information will be shown also together.

   ![](/handwriting/user-manual-9.png)

5. By selecting **Define Signature**, you can redefine your signature.
   You can use this option if you're having trouble logging on.

6. The options **Check Signature** and **Defeat Signature** are very similar.
   Here you can sign and compare your signature with the signature registered on the system.
   
   - **Check Signature** - intended to be used by you, the author of the signature.

   - **Defeat Signature** - intended to be used by someone else that you want to invite to try to replicate your signature.

   ![](/handwriting/user-manual-10.png)

7. From the account home page is possible to select each signature from the list that is associated with you.
   Then, you can see the detailed information about that signature.
   If you press the button **Compare signature**, the selected signature is compared with your reference signature.
   The signature in black is the selected signature and the signature in light blue is the reference signature.
   The points where the comparison failed are represented in red in the reference signature and in orange the correspondent point in the selected signature.
   A textual description about the comparison can be accessed by clicking in the result.

   ![](/handwriting/user-manual-11.png)


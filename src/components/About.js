import React from 'react';

export default function About(props) {
  return (
    <article>
      <div className = {`container-sm px-5`}>
        <div className = {`container-sm border border-${props.theme === "light" ? "dark" : "light"} px-5 py-4 text-${props.theme === "light" ? "dark" : "light"} bg-${props.theme}`}>
          <header className='container-fluid'>
            <h1 className='display-5'>
              <u>About TextManipulation Website</u>
            </h1>
          </header>

          <section className='container-fluid my-4'>
          <p class='fw-normal fs-6'>TextManipulation is a comprehensive text editing tool designed to simplify your text processing tasks. Our website offers a range of features that allow you to perform various text manipulations, such as converting text cases, removing extra spaces, and adding prefixes or suffixes to words. With a focus on ease of use and functionality, TextManipulation is your go-to platform for all text-related tasks.</p>
          <p class='fw-normal fs-6'>We believe that efficient text manipulation should be accessible to everyone, which is why we have created a platform that is both powerful and easy to navigate. Whether you are a student, a writer, or a professional, TextManipulation provides the tools you need to handle your text with precision and ease.</p>
          <p class='fw-normal fs-6'>Explore our features and see how TextManipulation can help you streamline your text editing process. We are dedicated to providing you with the best user experience and are always here to support you with any questions or feedback you may have.</p>
          <p class='fw-normal fs-6'>At TextManipulation, we understand the importance of having reliable and versatile text editing tools at your fingertips. That's why we've incorporated a variety of features that cater to different text manipulation needs:</p>
            <ul class='fw-normal fs-6'>
              <li><strong>Text Case Conversion:</strong> Easily switch between uppercase, lowercase, title case, and sentence case with just a click.</li>
              <li><strong>Extra Space Removal:</strong> Clean up your text by removing unnecessary spaces, ensuring a neat and professional appearance.</li>
              <li><strong>Prefix and Suffix Addition:</strong> Add specific prefixes or suffixes to words, enhancing your text's structure and readability.</li>
              <li><strong>Text Reversal:</strong> Reverse the order of characters in your text for creative and fun transformations.</li>
              <li><strong>Vowel and Consonant Operations:</strong> Count, remove, or manipulate vowels and consonants to meet your specific needs.</li>
              <li><strong>Digit and Special Character Handling:</strong> Remove digits or special characters, or count them to gain insights into your text.</li>
            </ul>
          <p class='fw-normal fs-6'>Our mission is to continuously enhance TextManipulation by adding new features and improving existing ones based on user feedback and technological advancements. We are committed to providing a robust and user-friendly platform that evolves with your needs.</p>
          <p class='fw-normal fs-6'>Thank you for choosing TextManipulation. We are excited to be a part of your text editing journey and look forward to supporting you in all your text manipulation endeavors. If you have any questions, suggestions, or feedback, please do not hesitate to contact us. Your input is invaluable in helping us make TextManipulation the best tool it can be.</p>
          </section>
        </div>
      </div>
    </article>
  )
}

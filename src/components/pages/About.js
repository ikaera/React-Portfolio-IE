import React, { useState } from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
        Full Stack Web Developer with a background in Economics and Accounting.
        Effective at combining computational thinking, pseudocoding and problem
        solving to develop user-friendly applications. Known for attention to
        detail no matter the complexity of the project and having a Growth
        Mindset.
      </p>
      <p>
        <q>
          <em>
            <strong>
              If anyone thinks he knows something, he does not yet know it as he
              should know it.
            </strong>
          </em>
        </q>
      </p>
      <p>
        This quote from God's Word, the Bible, which I admire, describes the{' '}
        <em> growth mindset</em> very well. For me it means actively seeking
        learning opportunities. This way of thinking is vital and helpful to me
        who desires to be more and more involved in the ever-developing and
        ever-advancing computer science industry. I have passion for programming
        and love learning new skills to make more useful applications and
        programs for the people to simplify our lives. It is really awesome that
        computer science combines two wonderful things:{' '}
        <strong> mathematics</strong> and <strong>technology</strong>, both of
        which interest me very very much.
      </p>
      {/* <br /> */}
      <p>
        At the end of the day what matters most is that we all can agree with
        the following: technology will never stop developing and advancing, each
        advancement only fuelling the further ingenuity and imagination of
        computer scientists and engineers. I too want to be part of these
        significant developments. If it is possible, I want to help a little bit
        make the technology of the future, not just use it!
      </p>
    </div>
  );
}

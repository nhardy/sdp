import React from 'react';
import Helmet from 'react-helmet';

import DefaultLayout from 'app/layouts/Default';
import Question from 'app/components/Question';

import styles from './styles.styl';


function FaqView() {
  return (
    <DefaultLayout>
      <Helmet title="FAQ | UTS: HELPS Booking System" />
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <h2 className={styles.category}>About the HELPS programs</h2>
      <Question question="Who can use HELPS?">
        Any student enrolled in any faculty at UTS, and all members of UTS staff.
      </Question>
      <Question question="Where is HELPS?">
        HELPS is located on Building 1, Level 3 , room 8 (opposite the Careers service).
      </Question>
      <Question question="How much does it cost?">
        Services are free of tuition fees for non-credit workshops and individual consultations.
      </Question>
      <Question question="Can you help me with my assignment?">
        Yes. HELPS offers various workshops and individual consultations.
        For more information, check out our <a href="http://www.ssu.uts.edu.au/helps/index.html">website</a>.
      </Question>
      <Question question="Can you proofread and correct my assignment?">
        No. Our role is not to correct grammar or other errors in an assignment.
        We can help you develop your own editing strategies.
        You should also use a computer spell-check, find a competent friend and a good dictionary.
      </Question>
      <Question question="Can you help me with the content of my assignment?">
        No. We can’t tell you what to say, we can only help you say it better and more clearly.
        While we’re happy to act as a sounding board for your ideas,
        content questions require the specialised disciplinary knowledge of lecturers and tutors in your faculty.
        You should take specific content questions directly to them.
      </Question>
      <Question question="My lecturer says I need to improve my grammar. Can you help me?">
        Yes. Please check out our <a href="http://www.ssu.uts.edu.au/helps/index.html">website</a>
        {' '}
        or <a href="http://www.ssu.uts.edu.au/helps/resources/">learning resources</a>.
      </Question>
      <Question question="Can you help me with my pronunciation?">
        Yes. Please check out our <a href="http://www.ssu.uts.edu.au/helps/index.html">website</a>
        {' '}
        or <a href="http://www.ssu.uts.edu.au/helps/resources/">learning resources</a>.
      </Question>
      <Question question="Can I practise my seminar presentation with someone?">
        Yes. You can attend our workshops or drop in for an individual consultation session.
      </Question>
      <h2 className={styles.category}>About the Special Conditions in Exams</h2>
      <Question question="I am not a native English speaker and I feel that I need more time in exams. Can you help?">
        Maybe. You might be eligible to apply for Special Conditions in Exams.
      </Question>
      <Question question="I'm a second/third year student. Can I get Special Conditions in my exams?">
        No. Only first year (1st/2nd semester) students are eligible to apply.
      </Question>
      <Question question="What is the deadline to apply for the Special Conditions?">
        The application closes on the Census date (for Spring semester: 26 August 2016).
        See <a href="http://www.ssu.uts.edu.au/helps/conditions/index.html">Special Conditions in Exams</a> for more information.
      </Question>
      <p>If you have a question which has not been answered above, please email us: <a href="mailto:helps@uts.edu.au">helps@uts.edu.au</a></p>
    </DefaultLayout>
  );
}

export default FaqView;

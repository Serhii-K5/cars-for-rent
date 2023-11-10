import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from './redux/sliceForm.js';
import { selectFeedbackForm } from "redux/selectors";

const ContactForm = () => {
  const dispatch = useDispatch();
  // const formData = useSelector((state) => state.form);
  const formData = useSelector(selectFeedbackForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь код для отправки письма на почту kcn@ggmail.com
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="subject">Тема:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Описание:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;

import api from './config';

export const getAllTestimonials = async () => {
  const resp = await api.get('/testimonial');
  return resp.data
};

export const getOneTestimonial = async (id) => {
  const resp = await api.get(`/testimonials/${id}`);
  return resp.data;
};

export const postTestimonial = async (testimonialData) => {
  const resp = await api.post('/testimonial', { testimonial: testimonialData });
  return resp.data;
};

export const putTestimonial = async (id, testimonialData) => {
  const resp = await api.put(`/testimonials/${id}`, { testimonial: testimonialData });
  return resp.data;
};

export const deleteTestimonial = async (id) => {
  const resp = await api.delete(`/testimonials/${id}`);
  return resp;
};

import emailjs from '@emailjs/browser';

// Configuração do EmailJS
const SERVICE_ID = 'service_vvxglpf';
const TEMPLATE_ID = 'template_vskkgic';
const PUBLIC_KEY = 'cZ2wsFAjNlCiZaIIG';

// Inicializar EmailJS
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
  rating?: number;
}

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        to_email: 'contato@solarien.com.br',
        form_type: 'Contato'
      }
    );
    return response;
  } catch (error) {
    console.error('Erro ao enviar email de contato:', error);
    throw error;
  }
};

export const sendNewsletterEmail = async (data: NewsletterData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: 'Novo Inscrito Newsletter',
        from_email: data.email,
        subject: 'Nova inscrição na newsletter',
        message: `Novo inscrito na newsletter: ${data.email}`,
        to_email: 'contato@solarien.com.br',
        form_type: 'Newsletter'
      }
    );
    return response;
  } catch (error) {
    console.error('Erro ao enviar email de newsletter:', error);
    throw error;
  }
};

export const sendFeedbackEmail = async (data: FeedbackData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: 'Novo Feedback Recebido',
        message: `Feedback: ${data.feedback}${data.rating ? `\nAvaliação: ${data.rating}/5` : ''}`,
        to_email: 'contato@solarien.com.br',
        form_type: 'Feedback'
      }
    );
    return response;
  } catch (error) {
    console.error('Erro ao enviar email de feedback:', error);
    throw error;
  }
};

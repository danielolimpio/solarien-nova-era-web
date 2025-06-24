
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FeedbackForm from '../components/FeedbackForm';

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-solarien-primary text-solarien-primary hover:bg-solarien-primary hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Feedback
              </h1>
              <p className="text-gray-300">
                Queremos ouvir sua opinião para melhorar nossos serviços
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <FeedbackForm />
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;

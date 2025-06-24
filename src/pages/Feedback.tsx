
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FeedbackForm from '../components/FeedbackForm';
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [pollAnswer, setPollAnswer] = useState<string>('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [pollSubmitted, setPollSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 'satisfaction',
      question: 'Como você avalia nossos serviços de energia solar?',
      options: [
        { value: 'excelente', label: 'Excelente' },
        { value: 'muito-bom', label: 'Muito Bom' },
        { value: 'bom', label: 'Bom' },
        { value: 'regular', label: 'Regular' },
        { value: 'ruim', label: 'Precisa Melhorar' }
      ]
    },
    {
      id: 'recommendation',
      question: 'Você recomendaria a Solarien para amigos e familiares?',
      options: [
        { value: 'definitivamente', label: 'Definitivamente Sim' },
        { value: 'provavelmente', label: 'Provavelmente Sim' },
        { value: 'talvez', label: 'Talvez' },
        { value: 'provavelmente-nao', label: 'Provavelmente Não' },
        { value: 'definitivamente-nao', label: 'Definitivamente Não' }
      ]
    },
    {
      id: 'experience',
      question: 'O que mais te impressionou na nossa proposta?',
      options: [
        { value: 'economia', label: 'Economia na conta de luz' },
        { value: 'sustentabilidade', label: 'Sustentabilidade ambiental' },
        { value: 'tecnologia', label: 'Tecnologia avançada' },
        { value: 'atendimento', label: 'Qualidade do atendimento' },
        { value: 'instalacao', label: 'Processo de instalação' }
      ]
    }
  ];

  const pollQuestion = {
    question: 'Qual seria seu próximo investimento em energia renovável?',
    options: [
      { value: 'bateria', label: 'Sistema de Armazenamento (Bateria)' },
      { value: 'aquecimento', label: 'Aquecimento Solar' },
      { value: 'expansao', label: 'Expansão do Sistema Atual' },
      { value: 'eletrico', label: 'Carregador para Carro Elétrico' },
      { value: 'outro', label: 'Outro' }
    ]
  };

  const handleQuizAnswer = (questionId: string, value: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const submitQuiz = () => {
    const allAnswered = quizQuestions.every(q => quizAnswers[q.id]);
    if (!allAnswered) {
      toast({
        title: "Quiz incompleto",
        description: "Por favor, responda todas as perguntas.",
        variant: "destructive",
      });
      return;
    }
    
    setQuizSubmitted(true);
    toast({
      title: "Quiz enviado com sucesso!",
      description: "Obrigado pelas suas respostas.",
    });
  };

  const submitPoll = () => {
    if (!pollAnswer) {
      toast({
        title: "Enquete incompleta",
        description: "Por favor, selecione uma opção.",
        variant: "destructive",
      });
      return;
    }
    
    setPollSubmitted(true);
    toast({
      title: "Voto registrado!",
      description: "Obrigado por participar da nossa enquete.",
    });
  };

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

          {/* Quiz Section */}
          <Card className="bg-green-800/20 border-green-700 max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary flex items-center gap-2">
                <Star className="w-6 h-6" />
                Quiz de Satisfação
              </CardTitle>
              <CardDescription className="text-gray-300">
                Responda algumas perguntas rápidas sobre sua experiência
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!quizSubmitted ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="space-y-3">
                      <h3 className="text-white font-medium">
                        {index + 1}. {question.question}
                      </h3>
                      <RadioGroup
                        value={quizAnswers[question.id] || ''}
                        onValueChange={(value) => handleQuizAnswer(question.id, value)}
                      >
                        {question.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem
                              value={option.value}
                              id={`${question.id}-${option.value}`}
                              className="border-solarien-primary text-solarien-primary"
                            />
                            <label
                              htmlFor={`${question.id}-${option.value}`}
                              className="text-gray-300 cursor-pointer"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                  <Button
                    onClick={submitQuiz}
                    className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  >
                    Enviar Quiz
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Star className="w-16 h-16 mx-auto text-solarien-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Quiz Enviado!</h3>
                  <p className="text-gray-300">Obrigado pelas suas respostas valiosas.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Poll Section */}
          <Card className="bg-green-800/20 border-green-700 max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary">
                Enquete Rápida
              </CardTitle>
              <CardDescription className="text-gray-300">
                Sua opinião nos ajuda a entender melhor suas necessidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!pollSubmitted ? (
                <div className="space-y-4">
                  <h3 className="text-white font-medium">{pollQuestion.question}</h3>
                  <RadioGroup value={pollAnswer} onValueChange={setPollAnswer}>
                    {pollQuestion.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={option.value}
                          id={`poll-${option.value}`}
                          className="border-solarien-primary text-solarien-primary"
                        />
                        <label
                          htmlFor={`poll-${option.value}`}
                          className="text-gray-300 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                  <Button
                    onClick={submitPoll}
                    className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  >
                    Votar
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 mx-auto bg-solarien-primary rounded-full flex items-center justify-center mb-3">
                    <span className="text-black font-bold text-xl">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Voto Registrado!</h3>
                  <p className="text-gray-300">Obrigado por participar da nossa enquete.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feedback Form Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Sugestões e Comentários
            </h2>
            <p className="text-gray-300 text-center mb-6">
              Compartilhe suas sugestões, ideias ou comentários conosco
            </p>
            <FeedbackForm />
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;

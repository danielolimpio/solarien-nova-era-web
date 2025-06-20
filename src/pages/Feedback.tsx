
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Users, TrendingUp, Send, Star, ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Feedback = () => {
  const navigate = useNavigate();
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Poll states
  const [polls, setPolls] = useState({
    satisfaction: { excellent: 0, good: 0, average: 0, poor: 0 },
    recommendation: { definitely: 0, probably: 0, maybe: 0, no: 0 },
    improvement: { website: 0, support: 0, prices: 0, process: 0 }
  });
  
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({});
  
  // Form state
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    type: 'suggestion',
    message: ''
  });

  const quizQuestions = [
    {
      id: 'experience',
      question: 'Como você classificaria sua experiência geral com energia solar?',
      options: [
        'Excelente - Já tenho e recomendo',
        'Boa - Estou considerando migrar',
        'Regular - Preciso de mais informações',
        'Ruim - Não tenho interesse'
      ]
    },
    {
      id: 'priority',
      question: 'O que é mais importante para você na escolha de energia?',
      options: [
        'Economia na conta de luz',
        'Sustentabilidade ambiental',
        'Facilidade do processo',
        'Suporte ao cliente'
      ]
    },
    {
      id: 'barrier',
      question: 'Qual é o maior obstáculo para migrar para energia solar?',
      options: [
        'Falta de informação',
        'Desconfiança no processo',
        'Questões burocráticas',
        'Não vejo obstáculos'
      ]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizCompleted(false);
  };

  const handlePollVote = (pollType: keyof typeof polls, option: string) => {
    if (userVotes[pollType]) return; // Already voted
    
    setPolls(prev => ({
      ...prev,
      [pollType]: {
        ...prev[pollType],
        [option]: (prev[pollType][option as keyof typeof prev[pollType]] as number) + 1
      }
    }));
    
    setUserVotes(prev => ({ ...prev, [pollType]: true }));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback enviado:', feedback);
    // Here you would typically send the data to your backend
    alert('Obrigado pelo seu feedback! Sua mensagem foi enviada com sucesso.');
    setFeedback({ name: '', email: '', type: 'suggestion', message: '' });
  };

  const getPollTotal = (poll: Record<string, number>) => {
    return Object.values(poll).reduce((sum, count) => sum + count, 0);
  };

  const getPercentage = (count: number, total: number) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
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
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <MessageSquare className="w-10 h-10 text-solarien-primary" />
                Envie seu Feedback
              </h1>
              <p className="text-gray-300">
                Sua opinião é muito importante para nós! Participe e ajude-nos a melhorar.
              </p>
            </div>
          </div>

          {/* Quiz Section */}
          <Card className="bg-green-800/20 border-green-700 mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Quiz Rápido sobre Energia Solar
              </CardTitle>
              <CardDescription className="text-gray-300">
                Responda algumas perguntas e nos ajude a entender melhor o perfil dos nossos clientes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!quizCompleted ? (
                <div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-semibold">
                        Pergunta {currentQuestion + 1} de {quizQuestions.length}
                      </span>
                      <div className="bg-green-800/30 rounded-full h-2 w-32">
                        <div 
                          className="bg-solarien-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl text-white mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(option)}
                          className="w-full p-4 text-left bg-green-800/30 border border-green-700 rounded-lg hover:bg-green-700/50 transition-colors duration-300 text-white"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-solarien-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Obrigado por participar!</h3>
                  <p className="text-gray-300 mb-6">Suas respostas nos ajudam a melhorar nossos serviços.</p>
                  <Button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-semibold"
                  >
                    Fazer Quiz Novamente
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Polls Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Satisfaction Poll */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-lg flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Satisfação Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Como você avalia nossos serviços?</p>
                <div className="space-y-2">
                  {Object.entries(polls.satisfaction).map(([key, count]) => {
                    const total = getPollTotal(polls.satisfaction);
                    const percentage = getPercentage(count, total);
                    const labels = {
                      excellent: 'Excelente',
                      good: 'Bom',
                      average: 'Regular',
                      poor: 'Ruim'
                    };
                    
                    return (
                      <div key={key}>
                        <div className="flex justify-between items-center mb-1">
                          <button
                            onClick={() => handlePollVote('satisfaction', key)}
                            disabled={userVotes.satisfaction}
                            className="text-white hover:text-solarien-primary transition-colors disabled:cursor-not-allowed"
                          >
                            {labels[key as keyof typeof labels]}
                          </button>
                          <span className="text-gray-300 text-sm">{count} ({percentage}%)</span>
                        </div>
                        <div className="bg-green-800/30 rounded-full h-2">
                          <div 
                            className="bg-solarien-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {userVotes.satisfaction && (
                  <p className="text-solarien-primary text-sm mt-2">✓ Obrigado pelo seu voto!</p>
                )}
              </CardContent>
            </Card>

            {/* Recommendation Poll */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-lg flex items-center gap-2">
                  <ThumbsUp className="w-6 h-6" />
                  Recomendação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Recomendaria nossos serviços?</p>
                <div className="space-y-2">
                  {Object.entries(polls.recommendation).map(([key, count]) => {
                    const total = getPollTotal(polls.recommendation);
                    const percentage = getPercentage(count, total);
                    const labels = {
                      definitely: 'Definitivamente',
                      probably: 'Provavelmente',
                      maybe: 'Talvez',
                      no: 'Não'
                    };
                    
                    return (
                      <div key={key}>
                        <div className="flex justify-between items-center mb-1">
                          <button
                            onClick={() => handlePollVote('recommendation', key)}
                            disabled={userVotes.recommendation}
                            className="text-white hover:text-solarien-primary transition-colors disabled:cursor-not-allowed"
                          >
                            {labels[key as keyof typeof labels]}
                          </button>
                          <span className="text-gray-300 text-sm">{count} ({percentage}%)</span>
                        </div>
                        <div className="bg-green-800/30 rounded-full h-2">
                          <div 
                            className="bg-solarien-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {userVotes.recommendation && (
                  <p className="text-solarien-primary text-sm mt-2">✓ Obrigado pelo seu voto!</p>
                )}
              </CardContent>
            </Card>

            {/* Improvement Poll */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-lg flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Melhorias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">O que podemos melhorar?</p>
                <div className="space-y-2">
                  {Object.entries(polls.improvement).map(([key, count]) => {
                    const total = getPollTotal(polls.improvement);
                    const percentage = getPercentage(count, total);
                    const labels = {
                      website: 'Website',
                      support: 'Atendimento',
                      prices: 'Preços',
                      process: 'Processo'
                    };
                    
                    return (
                      <div key={key}>
                        <div className="flex justify-between items-center mb-1">
                          <button
                            onClick={() => handlePollVote('improvement', key)}
                            disabled={userVotes.improvement}
                            className="text-white hover:text-solarien-primary transition-colors disabled:cursor-not-allowed"
                          >
                            {labels[key as keyof typeof labels]}
                          </button>
                          <span className="text-gray-300 text-sm">{count} ({percentage}%)</span>
                        </div>
                        <div className="bg-green-800/30 rounded-full h-2">
                          <div 
                            className="bg-solarien-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {userVotes.improvement && (
                  <p className="text-solarien-primary text-sm mt-2">✓ Obrigado pelo seu voto!</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Feedback Form */}
          <Card className="bg-green-800/20 border-green-700">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <Send className="w-8 h-8" />
                Envie sua Sugestão ou Crítica
              </CardTitle>
              <CardDescription className="text-gray-300">
                Compartilhe suas ideias, sugestões ou críticas construtivas conosco.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Nome</label>
                    <input
                      type="text"
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      className="w-full p-3 bg-green-800/30 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">E-mail</label>
                    <input
                      type="email"
                      value={feedback.email}
                      onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                      className="w-full p-3 bg-green-800/30 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Tipo de Feedback</label>
                  <select
                    value={feedback.type}
                    onChange={(e) => setFeedback({ ...feedback, type: e.target.value })}
                    className="w-full p-3 bg-green-800/30 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white"
                  >
                    <option value="suggestion">Sugestão</option>
                    <option value="complaint">Reclamação</option>
                    <option value="compliment">Elogio</option>
                    <option value="question">Pergunta</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">Mensagem</label>
                  <textarea
                    value={feedback.message}
                    onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                    rows={6}
                    className="w-full p-3 bg-green-800/30 border border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-solarien-primary focus:border-transparent text-white resize-none"
                    placeholder="Conte-nos sua opinião, sugestão ou experiência..."
                    required
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold px-8 py-4 text-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                  >
                    <Send className="w-6 h-6 mr-2" />
                    Enviar Feedback
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;

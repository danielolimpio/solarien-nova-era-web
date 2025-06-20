import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Star, ThumbsUp, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

interface PollMetrics {
  satisfaction: {
    excellent: number;
    good: number;
    average: number;
    poor: number;
  };
  recommendation: {
    definitely: number;
    probably: number;
    maybe: number;
    no: number;
  };
  improvements: {
    website: number;
    support: number;
    prices: number;
    process: number;
  };
}

const Feedback = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({
    satisfaction: '',
    recommendation: '',
    improvements: ''
  });

  const [pollMetrics, setPollMetrics] = useState<PollMetrics>({
    satisfaction: {
      excellent: 45,
      good: 35,
      average: 15,
      poor: 5
    },
    recommendation: {
      definitely: 50,
      probably: 30,
      maybe: 15,
      no: 5
    },
    improvements: {
      website: 40,
      support: 25,
      prices: 20,
      process: 15
    }
  });

  const handleQuizAnswer = (category: keyof typeof quizAnswers, value: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [category]: value
    }));

    // Update poll metrics based on the answer
    setPollMetrics(prev => {
      const newMetrics = { ...prev };
      
      if (category === 'satisfaction') {
        // Reset satisfaction metrics and increment the selected one
        const keys = Object.keys(newMetrics.satisfaction) as Array<keyof typeof newMetrics.satisfaction>;
        keys.forEach(key => {
          if (key === value) {
            newMetrics.satisfaction[key] += 1;
          }
        });
      } else if (category === 'recommendation') {
        // Reset recommendation metrics  and increment the selected one
        const keys = Object.keys(newMetrics.recommendation) as Array<keyof typeof newMetrics.recommendation>;
        keys.forEach(key => {
          if (key === value) {
            newMetrics.recommendation[key] += 1;
          }
        });
      } else if (category === 'improvements') {
        // Reset improvements metrics and increment the selected one
        const keys = Object.keys(newMetrics.improvements) as Array<keyof typeof newMetrics.improvements>;
        keys.forEach(key => {
          if (key === value) {
            newMetrics.improvements[key] += 1;
          }
        });
      }

      return newMetrics;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', { feedback, quizAnswers });
    alert('Obrigado pelo seu feedback!');
    setFeedback('');
    setQuizAnswers({
      satisfaction: '',
      recommendation: '',
      improvements: ''
    });
  };

  const calculatePercentage = (value: number, total: number) => {
    return Math.round((value / total) * 100);
  };

  const getTotalVotes = (metrics: Record<string, number>) => {
    return Object.values(metrics).reduce((sum, value) => sum + value, 0);
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
              <h1 className="text-4xl font-bold text-white mb-2">Envie seu Feedback</h1>
              <p className="text-gray-300">
                Sua opinião é fundamental para melhorarmos nossos serviços
              </p>
            </div>
          </div>

          {/* Quiz Section */}
          <Card className="bg-green-800/20 border-green-700 mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                Quiz de Satisfação
              </CardTitle>
              <CardDescription className="text-gray-300">
                Responda algumas perguntas rápidas sobre sua experiência
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Question 1: Satisfaction */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">1. Como você avalia nossa plataforma?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'excellent', label: 'Excelente', icon: '⭐' },
                    { value: 'good', label: 'Boa', icon: '👍' },
                    { value: 'average', label: 'Regular', icon: '👌' },
                    { value: 'poor', label: 'Ruim', icon: '👎' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={quizAnswers.satisfaction === option.value ? "default" : "outline"}
                      onClick={() => handleQuizAnswer('satisfaction', option.value)}
                      className={`h-auto p-4 ${
                        quizAnswers.satisfaction === option.value
                          ? 'bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black'
                          : 'border-solarien-primary/30 text-white hover:bg-solarien-primary/10'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold">{option.label}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Question 2: Recommendation */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">2. Você recomendaria nossos serviços?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'definitely', label: 'Definitivamente', icon: '💯' },
                    { value: 'probably', label: 'Provavelmente', icon: '👍' },
                    { value: 'maybe', label: 'Talvez', icon: '🤔' },
                    { value: 'no', label: 'Não', icon: '❌' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={quizAnswers.recommendation === option.value ? "default" : "outline"}
                      onClick={() => handleQuizAnswer('recommendation', option.value)}
                      className={`h-auto p-4 ${
                        quizAnswers.recommendation === option.value
                          ? 'bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black'
                          : 'border-solarien-primary/30 text-white hover:bg-solarien-primary/10'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold">{option.label}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Question 3: Improvements */}
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">3. O que podemos melhorar?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'website', label: 'Website', icon: '💻' },
                    { value: 'support', label: 'Atendimento', icon: '🎧' },
                    { value: 'prices', label: 'Preços', icon: '💰' },
                    { value: 'process', label: 'Processo', icon: '⚙️' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      variant={quizAnswers.improvements === option.value ? "default" : "outline"}
                      onClick={() => handleQuizAnswer('improvements', option.value)}
                      className={`h-auto p-4 ${
                        quizAnswers.improvements === option.value
                          ? 'bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black'
                          : 'border-solarien-primary/30 text-white hover:bg-solarien-primary/10'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold">{option.label}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Poll Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Satisfaction Metrics */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Satisfação Geral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(pollMetrics.satisfaction).map(([key, value]) => {
                  const total = getTotalVotes(pollMetrics.satisfaction);
                  const percentage = calculatePercentage(value, total);
                  const labels = {
                    excellent: 'Excelente',
                    good: 'Boa', 
                    average: 'Regular',
                    poor: 'Ruim'
                  };
                  
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{labels[key as keyof typeof labels]}</span>
                        <span className="text-solarien-primary font-semibold">{percentage}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
                <div className="text-center pt-2 border-t border-green-700">
                  <Badge variant="secondary" className="bg-solarien-primary/20 text-solarien-primary">
                    {getTotalVotes(pollMetrics.satisfaction)} votos
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Recommendation Metrics */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <ThumbsUp className="w-6 h-6" />
                  Recomendação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(pollMetrics.recommendation).map(([key, value]) => {
                  const total = getTotalVotes(pollMetrics.recommendation);
                  const percentage = calculatePercentage(value, total);
                  const labels = {
                    definitely: 'Definitivamente',
                    probably: 'Provavelmente',
                    maybe: 'Talvez',
                    no: 'Não'
                  };
                  
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{labels[key as keyof typeof labels]}</span>
                        <span className="text-solarien-primary font-semibold">{percentage}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
                <div className="text-center pt-2 border-t border-green-700">
                  <Badge variant="secondary" className="bg-solarien-primary/20 text-solarien-primary">
                    {getTotalVotes(pollMetrics.recommendation)} votos
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Improvements Metrics */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Melhorias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(pollMetrics.improvements).map(([key, value]) => {
                  const total = getTotalVotes(pollMetrics.improvements);
                  const percentage = calculatePercentage(value, total);
                  const labels = {
                    website: 'Website',
                    support: 'Atendimento',
                    prices: 'Preços',
                    process: 'Processo'
                  };
                  
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{labels[key as keyof typeof labels]}</span>
                        <span className="text-solarien-primary font-semibold">{percentage}%</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
                <div className="text-center pt-2 border-t border-green-700">
                  <Badge variant="secondary" className="bg-solarien-primary/20 text-solarien-primary">
                    {getTotalVotes(pollMetrics.improvements)} votos
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Form */}
          <Card className="bg-green-800/20 border-green-700 mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                Formulário de Feedback
              </CardTitle>
              <CardDescription className="text-gray-300">
                Deixe seu feedback detalhado sobre nossos serviços
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Textarea 
                    placeholder="Escreva aqui seu feedback..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="bg-green-900/40 border-green-700 text-white placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold">
                  Enviar Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Statistics Section */}
          <Card className="bg-green-800/20 border-green-700 mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <BarChart3 className="w-8 h-8" />
                Estatísticas
              </CardTitle>
              <CardDescription className="text-gray-300">
                Confira algumas estatísticas sobre nossa plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-solarien-primary mb-2">2,500+</div>
                <div className="text-gray-300">Clientes Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solarien-secondary mb-2">98%</div>
                <div className="text-gray-300">Satisfação Geral</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-solarien-tertiary mb-2">4.8/5</div>
                <div className="text-gray-300">Avaliação Média</div>
              </div>
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

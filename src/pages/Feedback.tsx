
import React, { useState } from 'react';
import { ArrowLeft, Star, MessageSquare, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Feedback = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [improvement, setImprovement] = useState('');
  
  // State for poll metrics
  const [pollMetrics, setPollMetrics] = useState({
    satisfaction: {
      excellent: 45,
      good: 30,
      average: 15,
      poor: 10
    },
    recommendation: {
      definitely: 55,
      probably: 25,
      maybe: 15,
      no: 5
    },
    improvement: {
      website: 25,
      support: 30,
      prices: 20,
      process: 25
    }
  });

  const handleQuizAnswer = (category: 'satisfaction' | 'recommendation' | 'improvement', answer: string) => {
    // Update the metrics based on the quiz answer
    setPollMetrics(prev => {
      const newMetrics = { ...prev };
      const categoryData = newMetrics[category];
      
      // Increment the selected answer by 1 and normalize to 100%
      const totalAnswers = Object.values(categoryData).reduce((sum, val) => sum + val, 0) + 1;
      const updatedCategory = { ...categoryData };
      
      if (answer in updatedCategory) {
        (updatedCategory as any)[answer] += 1;
      }
      
      // Normalize to percentages
      Object.keys(updatedCategory).forEach(key => {
        (updatedCategory as any)[key] = Math.round(((updatedCategory as any)[key] / totalAnswers) * 100);
      });
      
      newMetrics[category] = updatedCategory;
      return newMetrics;
    });
  };

  const handleSatisfactionChange = (value: string) => {
    setSatisfaction(value);
    handleQuizAnswer('satisfaction', value);
  };

  const handleRecommendationChange = (value: string) => {
    setRecommendation(value);
    handleQuizAnswer('recommendation', value);
  };

  const handleImprovementChange = (value: string) => {
    setImprovement(value);
    handleQuizAnswer('improvement', value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      feedback,
      satisfaction,
      recommendation,
      improvement
    });
    // Here you would typically send the data to your backend
    alert('Obrigado pelo seu feedback!');
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
                Sua opinião é muito importante para nós
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <Card className="bg-green-800/20 border-green-700 mb-8">
            <CardHeader>
              <CardTitle className="text-solarien-primary text-2xl flex items-center gap-3">
                <MessageSquare className="w-8 h-8" />
                Quiz de Feedback
              </CardTitle>
              <CardDescription className="text-gray-300">
                Responda algumas perguntas rápidas sobre sua experiência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Satisfaction Question */}
                <div>
                  <Label className="text-white text-lg font-semibold mb-4 block">
                    Como você avalia sua satisfação geral com nosso serviço?
                  </Label>
                  <RadioGroup value={satisfaction} onValueChange={handleSatisfactionChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="excellent" id="excellent" />
                      <Label htmlFor="excellent" className="text-gray-300">Excelente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="good" id="good" />
                      <Label htmlFor="good" className="text-gray-300">Bom</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="average" id="average" />
                      <Label htmlFor="average" className="text-gray-300">Regular</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="poor" id="poor" />
                      <Label htmlFor="poor" className="text-gray-300">Ruim</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Recommendation Question */}
                <div>
                  <Label className="text-white text-lg font-semibold mb-4 block">
                    Você recomendaria nossos serviços para amigos e familiares?
                  </Label>
                  <RadioGroup value={recommendation} onValueChange={handleRecommendationChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="definitely" id="definitely" />
                      <Label htmlFor="definitely" className="text-gray-300">Definitivamente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="probably" id="probably" />
                      <Label htmlFor="probably" className="text-gray-300">Provavelmente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="maybe" />
                      <Label htmlFor="maybe" className="text-gray-300">Talvez</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-gray-300">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Improvement Question */}
                <div>
                  <Label className="text-white text-lg font-semibold mb-4 block">
                    Qual aspecto você acha que mais precisa de melhorias?
                  </Label>
                  <RadioGroup value={improvement} onValueChange={handleImprovementChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="website" id="website" />
                      <Label htmlFor="website" className="text-gray-300">Website</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support" className="text-gray-300">Atendimento</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prices" id="prices" />
                      <Label htmlFor="prices" className="text-gray-300">Preços</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="process" id="process" />
                      <Label htmlFor="process" className="text-gray-300">Processo</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional Feedback */}
                <div>
                  <Label htmlFor="feedback" className="text-white text-lg font-semibold mb-4 block">
                    Comentários adicionais (opcional)
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder="Compartilhe mais detalhes sobre sua experiência..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="bg-green-800/30 border-green-700 text-white placeholder-gray-400 focus:border-solarien-primary"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 text-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                >
                  Enviar Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Poll Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Satisfaction Results */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  Satisfação Geral
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Excelente</span>
                    <span className="text-solarien-primary">{pollMetrics.satisfaction.excellent}%</span>
                  </div>
                  <Progress value={pollMetrics.satisfaction.excellent} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Bom</span>
                    <span className="text-solarien-primary">{pollMetrics.satisfaction.good}%</span>
                  </div>
                  <Progress value={pollMetrics.satisfaction.good} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Regular</span>
                    <span className="text-solarien-primary">{pollMetrics.satisfaction.average}%</span>
                  </div>
                  <Progress value={pollMetrics.satisfaction.average} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Ruim</span>
                    <span className="text-solarien-primary">{pollMetrics.satisfaction.poor}%</span>
                  </div>
                  <Progress value={pollMetrics.satisfaction.poor} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recommendation Results */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Recomendação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Definitivamente</span>
                    <span className="text-solarien-primary">{pollMetrics.recommendation.definitely}%</span>
                  </div>
                  <Progress value={pollMetrics.recommendation.definitely} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Provavelmente</span>
                    <span className="text-solarien-primary">{pollMetrics.recommendation.probably}%</span>
                  </div>
                  <Progress value={pollMetrics.recommendation.probably} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Talvez</span>
                    <span className="text-solarien-primary">{pollMetrics.recommendation.maybe}%</span>
                  </div>
                  <Progress value={pollMetrics.recommendation.maybe} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Não</span>
                    <span className="text-solarien-primary">{pollMetrics.recommendation.no}%</span>
                  </div>
                  <Progress value={pollMetrics.recommendation.no} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Improvement Results */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary text-xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Melhorias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Website</span>
                    <span className="text-solarien-primary">{pollMetrics.improvement.website}%</span>
                  </div>
                  <Progress value={pollMetrics.improvement.website} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Atendimento</span>
                    <span className="text-solarien-primary">{pollMetrics.improvement.support}%</span>
                  </div>
                  <Progress value={pollMetrics.improvement.support} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Preços</span>
                    <span className="text-solarien-primary">{pollMetrics.improvement.prices}%</span>
                  </div>
                  <Progress value={pollMetrics.improvement.prices} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Processo</span>
                    <span className="text-solarien-primary">{pollMetrics.improvement.process}%</span>
                  </div>
                  <Progress value={pollMetrics.improvement.process} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-solarien-primary/10 to-solarien-secondary/10 border-solarien-primary/20">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-solarien-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-solarien-primary mb-2">1,247</div>
                <div className="text-gray-300">Feedbacks Recebidos</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-solarien-secondary/10 to-solarien-tertiary/10 border-solarien-secondary/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-solarien-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-solarien-secondary mb-2">4.8</div>
                <div className="text-gray-300">Nota Média</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-solarien-tertiary/10 to-solarien-primary/10 border-solarien-tertiary/20">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-solarien-tertiary mx-auto mb-4" />
                <div className="text-3xl font-bold text-solarien-tertiary mb-2">96%</div>
                <div className="text-gray-300">Satisfação Geral</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Feedback;

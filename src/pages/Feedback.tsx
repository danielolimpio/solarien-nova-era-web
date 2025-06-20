
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { MessageSquare, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Footer from '../components/Footer';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [pollVotes, setPollVotes] = useState({
    satisfaction: { excelente: 45, bom: 30, regular: 15, ruim: 10 },
    recommendation: { sim: 78, nao: 12, talvez: 10 },
    improvement: { atendimento: 25, preco: 35, agilidade: 40 }
  });
  const [hasVoted, setHasVoted] = useState({});
  
  const { toast } = useToast();
  const form = useForm();

  const quizQuestions = [
    {
      id: 'experience',
      question: 'Como você avalia sua experiência com a Solarien Energy?',
      options: [
        { value: 'excelente', label: 'Excelente - Superou expectativas' },
        { value: 'muito-boa', label: 'Muito boa - Atendeu expectativas' },
        { value: 'boa', label: 'Boa - Satisfatório' },
        { value: 'regular', label: 'Regular - Pode melhorar' },
        { value: 'ruim', label: 'Ruim - Não recomendo' }
      ]
    },
    {
      id: 'savings',
      question: 'O quanto você economizou na sua conta de energia?',
      options: [
        { value: '0-5', label: '0% a 5%' },
        { value: '6-10', label: '6% a 10%' },
        { value: '11-15', label: '11% a 15%' },
        { value: '16-20', label: '16% a 20%' },
        { value: '20+', label: 'Mais de 20%' }
      ]
    },
    {
      id: 'process',
      question: 'Como foi o processo de adesão?',
      options: [
        { value: 'muito-facil', label: 'Muito fácil e rápido' },
        { value: 'facil', label: 'Fácil' },
        { value: 'normal', label: 'Normal' },
        { value: 'complicado', label: 'Um pouco complicado' },
        { value: 'muito-complicado', label: 'Muito complicado' }
      ]
    }
  ];

  const handleQuizAnswer = (questionId: string, value: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handlePollVote = (pollType: string, option: string) => {
    if (hasVoted[pollType]) return;
    
    setPollVotes(prev => ({
      ...prev,
      [pollType]: {
        ...prev[pollType],
        [option]: prev[pollType][option] + 1
      }
    }));
    
    setHasVoted(prev => ({ ...prev, [pollType]: true }));
    
    toast({
      title: "Voto registrado!",
      description: "Obrigado por participar da nossa enquete.",
    });
  };

  const onSubmitFeedback = (data: any) => {
    console.log('Feedback enviado:', data);
    toast({
      title: "Feedback enviado com sucesso!",
      description: "Sua opinião é muito importante para nós. Entraremos em contato em breve.",
    });
    form.reset();
  };

  const onSubmitQuiz = () => {
    console.log('Quiz respondido:', quizAnswers);
    toast({
      title: "Quiz concluído!",
      description: "Obrigado por compartilhar sua experiência conosco.",
    });
  };

  const getPollPercentage = (pollType: string, option: string) => {
    const total = Object.values(pollVotes[pollType]).reduce((sum: number, votes: number) => sum + votes, 0);
    return Math.round((pollVotes[pollType][option] / total) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-solarien-primary via-solarien-secondary to-solarien-tertiary py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="w-12 h-12 text-black mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              Envie seu Feedback
            </h1>
          </div>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Sua opinião é fundamental para continuarmos melhorando nossos serviços. 
            Participe do nosso quiz, vote nas enquetes e envie suas sugestões!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'quiz', label: 'Quiz de Experiência', icon: Star },
            { id: 'poll', label: 'Enquetes', icon: TrendingUp },
            { id: 'form', label: 'Sugestões', icon: MessageSquare }
          ].map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeTab === id ? "default" : "outline"}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-solarien-primary" />
                  Quiz de Experiência
                </CardTitle>
                <CardDescription>
                  Conte-nos sobre sua experiência com a Solarien Energy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {quizQuestions.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <h3 className="text-lg font-semibold">{question.question}</h3>
                    <RadioGroup
                      value={quizAnswers[question.id]}
                      onValueChange={(value) => handleQuizAnswer(question.id, value)}
                    >
                      {question.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={option.value} />
                          <Label htmlFor={option.value} className="cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
                
                <Button 
                  onClick={onSubmitQuiz}
                  className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black"
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Enviar Respostas
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Poll Tab */}
        {activeTab === 'poll' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Satisfaction Poll */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-solarien-primary" />
                  Nível de Satisfação
                </CardTitle>
                <CardDescription>Como você avalia nossos serviços?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(pollVotes.satisfaction).map(([option, votes]) => (
                    <Button
                      key={option}
                      variant={hasVoted.satisfaction ? "outline" : "secondary"}
                      onClick={() => handlePollVote('satisfaction', option)}
                      disabled={hasVoted.satisfaction}
                      className="h-auto p-4 flex flex-col items-center"
                    >
                      <div className="text-2xl font-bold text-solarien-primary">
                        {getPollPercentage('satisfaction', option)}%
                      </div>
                      <div className="text-sm capitalize">{option}</div>
                      <div className="text-xs text-muted-foreground">{votes} votos</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendation Poll */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-solarien-primary" />
                  Recomendação
                </CardTitle>
                <CardDescription>Você recomendaria a Solarien para amigos?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(pollVotes.recommendation).map(([option, votes]) => (
                    <Button
                      key={option}
                      variant={hasVoted.recommendation ? "outline" : "secondary"}
                      onClick={() => handlePollVote('recommendation', option)}
                      disabled={hasVoted.recommendation}
                      className="h-auto p-4 flex flex-col items-center"
                    >
                      <div className="text-2xl font-bold text-solarien-primary">
                        {getPollPercentage('recommendation', option)}%
                      </div>
                      <div className="text-sm capitalize">{option === 'nao' ? 'Não' : option}</div>
                      <div className="text-xs text-muted-foreground">{votes} votos</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Improvement Poll */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-solarien-primary" />
                  Área de Melhoria
                </CardTitle>
                <CardDescription>Qual área devemos priorizar para melhorar?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(pollVotes.improvement).map(([option, votes]) => (
                    <Button
                      key={option}
                      variant={hasVoted.improvement ? "outline" : "secondary"}
                      onClick={() => handlePollVote('improvement', option)}
                      disabled={hasVoted.improvement}
                      className="h-auto p-4 flex flex-col items-center"
                    >
                      <div className="text-2xl font-bold text-solarien-primary">
                        {getPollPercentage('improvement', option)}%
                      </div>
                      <div className="text-sm capitalize">{option}</div>
                      <div className="text-xs text-muted-foreground">{votes} votos</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Form Tab */}
        {activeTab === 'form' && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-solarien-primary" />
                  Formulário de Sugestões
                </CardTitle>
                <CardDescription>
                  Envie suas críticas, sugestões ou elogios. Sua opinião é muito importante!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitFeedback)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome *</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome completo" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 99999-9999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Feedback *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="elogio">Elogio</SelectItem>
                              <SelectItem value="sugestao">Sugestão</SelectItem>
                              <SelectItem value="critica">Crítica</SelectItem>
                              <SelectItem value="reclamacao">Reclamação</SelectItem>
                              <SelectItem value="duvida">Dúvida</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto *</FormLabel>
                          <FormControl>
                            <Input placeholder="Resumo do seu feedback" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Descreva detalhadamente seu feedback..."
                              className="min-h-[120px]"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black text-lg py-6"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Enviar Feedback
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;

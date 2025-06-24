
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { sendFeedbackEmail } from '../services/emailService';

const feedbackSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  feedback: z.string().min(10, "Feedback deve ter pelo menos 10 caracteres"),
  rating: z.number().min(1).max(5).optional(),
});

const FeedbackForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState<number>(0);

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
      rating: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof feedbackSchema>) => {
    setIsSubmitting(true);
    console.log('Enviando feedback:', values);
    
    try {
      await sendFeedbackEmail({
        name: values.name,
        email: values.email,
        feedback: values.feedback,
        rating: rating > 0 ? rating : undefined,
      });
      toast({
        title: "Feedback enviado com sucesso!",
        description: "Obrigado pelo seu feedback. Ele é muito importante para nós.",
      });
      form.reset();
      setRating(0);
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      toast({
        title: "Erro ao enviar feedback",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-green-800/20 border-green-700 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-solarien-primary">
          Envie seu Feedback
        </CardTitle>
        <CardDescription className="text-gray-300">
          Sua opinião é muito importante para melhorarmos nossos serviços
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      className="bg-green-800/30 border-green-700 text-white placeholder-gray-400 focus:ring-solarien-primary focus:border-solarien-primary"
                    />
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
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                      className="bg-green-800/30 border-green-700 text-white placeholder-gray-400 focus:ring-solarien-primary focus:border-solarien-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="text-white font-medium">Avaliação (opcional)</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-colors duration-200"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-400 hover:text-yellow-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Seu Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Compartilhe sua experiência, sugestões ou comentários..."
                      rows={5}
                      {...field}
                      className="bg-green-800/30 border-green-700 text-white placeholder-gray-400 focus:ring-solarien-primary focus:border-solarien-primary resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 text-lg rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Clock, ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await emailjs.send(
        'service_vvxglpf',
        'template_vskkgic',
        {
          to_email: 'contato@solarien.com.br',
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          reply_to: values.email
        },
        'cZ2wsFAjNlCiZaIIG'
      );
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      description: "+55 (11) 99736-1698",
      action: () => window.open('tel:+5511997361698', '_self')
    },
    {
      icon: Mail,
      title: "Email",
      description: "contato@solarien.com.br",
      action: () => window.open('mailto:contato@solarien.com.br', '_blank')
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "Av. Julia Freire, 1200 - Expedicionários - João Pessoa - PB",
      action: null
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      description: "Segunda à Sexta: 8h às 18h",
      action: null
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Entre em Contato - Solarien Energy"
        description="Entre em contato com a Solarien Energy. Tire suas dúvidas sobre energia solar, mercado livre de energia e economia na conta de luz. Atendimento pelo WhatsApp, telefone ou email."
        keywords="contato solarien, falar com solarien, whatsapp energia solar, telefone solarien, email solarien"
        canonical="https://solarien.com.br/contato"
      />
      <Header />
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#002113' }}>
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
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
                Entre em Contato
              </h1>
              <p className="text-gray-300">
                Estamos aqui para ajudar você com todas as suas dúvidas
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-green-800/20 border-green-700">
              <CardHeader>
                <CardTitle className="text-solarien-primary">
                  Envie sua Mensagem
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Preencha o formulário abaixo e entraremos em contato em breve
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

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Telefone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(11) 99999-9999"
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Assunto</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Assunto da sua mensagem"
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Escreva sua mensagem aqui..."
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
                      className="w-full bg-gradient-to-r from-solarien-primary to-solarien-secondary text-black font-bold py-3 text-lg rounded-lg hover:shadow-lg hover:shadow-solarien-primary/25 transition-all duration-300"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-green-800/20 border-green-700">
                <CardHeader>
                  <CardTitle className="text-solarien-primary">
                    Informações de Contato
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Outras formas de entrar em contato conosco
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg bg-green-800/20 border border-green-700/50 ${
                        info.action ? 'cursor-pointer hover:bg-green-800/30 transition-colors duration-300' : ''
                      }`}
                      onClick={info.action || undefined}
                    >
                      <div className="flex-shrink-0">
                        <info.icon className="w-6 h-6 text-solarien-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-r from-green-800/30 to-green-700/30 border-solarien-primary/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Atendimento Rápido
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Para um atendimento mais rápido, fale conosco pelo WhatsApp
                  </p>
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300"
                    onClick={() => window.open('https://wa.me/5511997361698', '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import useActions from '@/hooks/useActions';

const AppointmentsList = () => {
  const { handleAction, isLoading } = useActions();

  const upcomingAppointments = [
    {
      date: "15 Juin 2024",
      time: "10:30",
      doctor: "Dr. Bensalem",
      specialty: "Cardiologie",
      location: "Centre Médical Universitaire"
    },
    {
      date: "22 Juin 2024",
      time: "14:00",
      doctor: "Dr. Mansouri",
      specialty: "Ophtalmologie",
      location: "Clinique El Azhar"
    }
  ];

  return (
    <FadeIn>
      <Card>
        <CardHeader>
          <CardTitle>Mes rendez-vous médicaux</CardTitle>
          <CardDescription>
            Consultez et gérez vos rendez-vous avec les professionnels de santé conventionnés.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg">
                  <div className="flex gap-4 items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{appointment.doctor}</h3>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span>{appointment.date}</span>
                        <span>•</span>
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 md:flex-initial"
                      onClick={() => handleAction("Modification du rendez-vous", `Modification du rendez-vous avec ${appointment.doctor}`)}
                      disabled={isLoading}
                    >
                      Modifier
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="flex-1 md:flex-initial"
                      onClick={() => handleAction("Annulation du rendez-vous", `Annulation du rendez-vous avec ${appointment.doctor}`)}
                      disabled={isLoading}
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Vous n'avez aucun rendez-vous à venir.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => handleAction("Historique des rendez-vous", "Voici l'historique de vos rendez-vous")}
            disabled={isLoading}
          >
            Historique
          </Button>
          <Button 
            onClick={() => handleAction("Prise de rendez-vous", "Vous allez être redirigé vers le formulaire de prise de rendez-vous")}
            disabled={isLoading}
          >
            Prendre rendez-vous
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
};

export default AppointmentsList;

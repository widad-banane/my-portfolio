// @ts-nocheck
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { activities } from '@/data/activitiesData';

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ActivitiesSection() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {activities.map((activity, index) => (
            <div key={index} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {activity.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {activity.organization}
                      </p>
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                      {activity.dates}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {activity.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

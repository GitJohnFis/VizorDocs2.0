import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TutorialSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function TutorialSection({ title, icon, children, className }: TutorialSectionProps) {
  return (
    <Card className={`mb-8 shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold flex items-center gap-3 text-primary">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <Separator className="mb-4"/>
      <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground leading-relaxed tutorial-content">
        {children}
      </CardContent>
    </Card>
  );
}

import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-2">
            <Logo className="h-10 w-10 text-foreground" />
          </div>
          <CardTitle className="font-display text-2xl">Page Not Found</CardTitle>
          <CardDescription>This corner of the dungeon isn't on the map.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">Back to the Character Builder</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

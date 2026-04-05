import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Radio, UserCheck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getPricePackage } from "@/lib/payment-matrix";

interface ApplicationDialogProps {
  children: React.ReactNode;
}

const tiers = [
  {
    key: "community",
    icon: <Users className="h-4 w-4" />,
    price: "€29/month",
    label: "Community",
    description: "Recordings, Telegram group, async Q&A",
  },
  {
    key: "live",
    icon: <Radio className="h-4 w-4" />,
    price: "€79/month",
    label: "Live",
    description: "Everything above + weekly live sessions",
    popular: true,
  },
  {
    key: "mentorship",
    icon: <UserCheck className="h-4 w-4" />,
    price: "€199/month",
    label: "Mentorship",
    description: "Everything above + 1:1 monthly call + project review",
  },
];

const ApplicationDialog = ({ children }: ApplicationDialogProps) => {
  const [open, setOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const { toast } = useToast();

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setSelectedTier(null);
  };

  const handleStart = () => {
    if (!selectedTier) return;
    const pricePackage = getPricePackage(selectedTier);
    if (pricePackage?.paymentLink) {
      window.location.href = pricePackage.paymentLink;
    } else {
      toast({
        title: "Payment link not available",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] px-6">
        <DialogHeader>
          <DialogTitle>Choose Your Plan</DialogTitle>
          <DialogDescription>
            Start learning to build with AI today.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              onClick={() => setSelectedTier(tier.key)}
              className={`rounded-lg border p-3 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-pointer relative ${
                selectedTier === tier.key
                  ? "border-2 border-primary bg-primary/10 shadow-lg ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-primary">{tier.icon}</span>
                  <span className="font-medium text-primary">{tier.price}</span>
                  {selectedTier === tier.key && (
                    <div className="bg-primary/10 rounded-full p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  {tier.popular && (
                    <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">
                    1 Week Free
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {tier.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Button
            onClick={handleStart}
            disabled={!selectedTier}
            className="w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
          >
            Start Free Trial
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;

import { Box, Text, Heading } from "@radix-ui/themes";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      style={{
        backgroundColor: "var(--color-panel)",   // uses Radix theme color
        borderRadius: "var(--radius-3)",         // uses Radix radius scale
        padding: "var(--space-4)",               // uses Radix spacing token
        boxShadow: "var(--shadow-2)",            // uses Radix shadow scale
      }}


    >
      <Heading size="2" mb="2">
        {title}
      </Heading>
      <Text as="span">
        {children}

      </Text>
    </Box>
  );
}

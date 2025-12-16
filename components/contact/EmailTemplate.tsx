import {
    Html,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Link,
    Hr,
} from "@react-email/components";

type EmailTemplateProps = {
    email: string;
    name: string;
    message: string;
};

export default function EmailTemplate({
    email,
    name,
    message,
}: EmailTemplateProps) {
    const currentDate = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <Html>
            <Body style={bodyStyle}>
                <Container style={containerStyle}>
                    <Heading style={headingStyle}>
                        New Contact Message
                    </Heading>

                    <Text style={subHeadingStyle}>
                        Portfolio Contact Form
                    </Text>

                    <Hr />

                    <Section>
                        <Text><strong>Name:</strong> {name}</Text>
                        <Text>
                            <strong>Email:</strong>{" "}
                            <Link href={`mailto:${email}`}>{email}</Link>
                        </Text>
                        <Text>
                            <strong>Received:</strong> {currentDate}
                        </Text>
                    </Section>

                    <Hr />

                    <Section>
                        <Heading as="h3">Message</Heading>
                        <Text style={messageStyle}>
                            {message || "No message provided"}
                        </Text>
                    </Section>

                    <Hr />

                    <Text style={footerStyle}>
                        This message was sent from your portfolio contact form.
                    </Text>

                    <Link
                        href={`mailto:${email}?subject=Re: Contact from Portfolio`}
                        style={buttonStyle}
                    >
                        Reply to {name}
                    </Link>
                </Container>
            </Body>
        </Html>
    );
}

/* ===== Styles ===== */

const bodyStyle = {
    backgroundColor: "#f4f4f5",
    fontFamily: "Arial, sans-serif",
};

const containerStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "6px",
};

const headingStyle = {
    color: "#4f46e5",
    marginBottom: "4px",
};

const subHeadingStyle = {
    color: "#6b7280",
    fontSize: "14px",
};

const messageStyle = {
    backgroundColor: "#f9fafb",
    padding: "12px",
    borderRadius: "4px",
};

const footerStyle = {
    fontSize: "12px",
    color: "#6b7280",
};

const buttonStyle = {
    display: "inline-block",
    marginTop: "16px",
    padding: "12px 20px",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "4px",
};

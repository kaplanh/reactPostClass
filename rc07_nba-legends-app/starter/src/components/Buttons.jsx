import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const Buttons = () => {
    return (
        <Container fluid="md" className="">
            <Container>
               
                <Button variant="primary">Primary</Button>{" "}
                <Button variant="secondary">Secondary</Button>{" "}
                <Button variant="success">Success</Button>{" "}
                <Button variant="warning">Warning</Button>{" "}
                <Button variant="danger">Danger</Button>{" "}
                <Button variant="info">Info</Button>{" "}
                <Button variant="light">Light</Button>{" "}
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </Container>
            <Container fluid="md" className="">
                <Container>
                    <Button variant="outline-primary">Primary</Button>{" "}
                    <Button variant="outline-secondary">Secondary</Button>{" "}
                    <Button variant="outline-success">Success</Button>{" "}
                    <Button variant="outline-warning">Warning</Button>{" "}
                    <Button variant="outline-danger">Danger</Button>{" "}
                    <Button variant="outline-info">Info</Button>{" "}
                    <Button variant="outline-light">Light</Button>{" "}
                    <Button variant="outline-dark">Dark</Button>
                </Container>
            </Container>
            <Container fluid="md" className="">
                <>
                    <Button href="https://react-bootstrap.netlify.app/docs/components/buttons/">
                        Link
                    </Button>{" "}
                    <Button type="submit">Button</Button>{" "}
                    <Button size="sm" as="input" type="button" value="Input" />{" "}
                    <Button as="input" type="submit" value="Submit" disabled />{" "}
                    <Button
                        size="lg"
                        as="input"
                        type="reset"
                        value="Reset"
                        active
                    />
                </>
            </Container>
            <Container fluid="md" className="bg-info"></Container>
        </Container>
    );
    
};
export default Buttons;

import React from 'react'
import { Alert, Button } from 'react-bootstrap'

function Pop() {
    return (
        <div>
          
                <>
                <Alert show="show" variant="success">
                    <Alert.Heading>How's it going?!</Alert.Heading>
                    <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick='false' variant="outline-success">
                        Close me y'all!
                    </Button>
                    </div>
                </Alert>

                {<Button onClick='false'>Show Alert</Button>}
                </>
        
            

            
        </div>
    )
}

export default Pop

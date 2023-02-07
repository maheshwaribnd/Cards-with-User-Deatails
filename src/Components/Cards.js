import Card from 'react-bootstrap/Card';

const Cards = ({ id, avatar, email, first_name, last_name }) => {

    return (
        <div className='bg-rose-400 border rounded-md'>
            <Card style={{ width: '18rem', height: '19rem' }}>
                <div className='flex justify-center w-64 pt-7 pb-7 bg-slate-700 border rounded-md'>
                    <Card.Img className='border rounded-2xl' variant="top" src={avatar} />
                </div>

                <Card.Body>
                    <div className='flex justify-start font-semibold leading-8 px-4 pt-5'>
                        <Card.Text>
                            <span className='font-bold'>FirstName</span> : {first_name}
                        </Card.Text>
                    </div>
                    <div className='flex justify-start font-semibold leading-8 px-4'>
                        <Card.Text>
                            <span className='font-bold'>LastName</span> : {last_name}
                        </Card.Text>
                    </div>
                    <div className='flex justify-start font-semibold leading-8 px-4'>
                        <Card.Text>
                            <span className='font-bold'>Email</span> : {email}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
// className='bg-slate-500' style={{width: '21%', height:'12%', borderRadius: '2px solid grey'}}
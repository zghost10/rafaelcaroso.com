import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface IGithubCard{
  title: string,
  caption: string
}

export const GithubCard: React.FC<IGithubCard> = ({title, caption}) => {
  return (
    <Card onClick={() => window.open('https://github.com/zghost10', '_blank')}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            <GitHubIcon sx={{ marginX: 1 }} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {caption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
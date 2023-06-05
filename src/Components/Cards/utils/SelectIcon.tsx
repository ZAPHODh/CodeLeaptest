import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
export const SelectIcon = (icon: string) => {
  if (icon === 'game') return <VideogameAssetIcon fontSize="large" />;
  if (icon === 'default') return <CropOriginalIcon fontSize="large" />;
};

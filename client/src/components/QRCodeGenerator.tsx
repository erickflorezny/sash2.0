import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { QrCode, Download } from 'lucide-react';
import { useShareableLink } from '@/hooks/use-shareable-link';

interface QRCodeGeneratorProps {
  url?: string;
  size?: number;
  className?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  url,
  size = 200,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { getCurrentUrl } = useShareableLink();
  const qrUrl = url || getCurrentUrl();

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current) return;

      try {
        // For a simple implementation, we'll use a QR code library
        // In a real app, you'd install and use a library like 'qrcode'
        // For now, we'll create a placeholder that shows the concept

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, size, size);

        // Draw a simple QR code placeholder
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, size, size);

        // Add white squares to make it look like a QR code
        ctx.fillStyle = '#fff';
        const blockSize = size / 10;
        for (let i = 1; i < 9; i += 2) {
          for (let j = 1; j < 9; j += 2) {
            ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
          }
        }

        // Add URL text
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('QR Code for:', size / 2, size - 30);
        ctx.fillText(qrUrl.length > 20 ? qrUrl.substring(0, 20) + '...' : qrUrl, size / 2, size - 15);

      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, [qrUrl, size]);

  const downloadQR = () => {
    if (!canvasRef.current) return;

    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="border rounded-lg p-4 bg-white">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="border"
        />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Scan to visit:</p>
        <p className="text-xs text-gray-500 break-all max-w-xs">{qrUrl}</p>
      </div>
      <Button onClick={downloadQR} variant="outline" size="sm">
        <Download className="h-4 w-4 mr-2" />
        Download QR Code
      </Button>
    </div>
  );
};

// Simple shareable link display component
interface ShareableLinkDisplayProps {
  url?: string;
  title?: string;
  className?: string;
}

export const ShareableLinkDisplay: React.FC<ShareableLinkDisplayProps> = ({
  url,
  title = "Shareable Link",
  className = ''
}) => {
  const { getCurrentUrl, copyToClipboard } = useShareableLink();
  const linkUrl = url || getCurrentUrl();

  const handleCopy = async () => {
    await copyToClipboard(linkUrl);
  };

  return (
    <div className={`p-4 border rounded-lg bg-gray-50 ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={linkUrl}
          readOnly
          className="flex-1 px-3 py-2 text-sm border rounded bg-white"
        />
        <Button onClick={handleCopy} size="sm">
          Copy
        </Button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;